const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs"); // Import bcryptjs for password hashing
require("dotenv").config(); // Load .env variables

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Atlas Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB Atlas");
  })
  .catch((err) => {
    console.log("MongoDB connection error: ", err);
  });

// User Schema and Model (for registration and login)
const userSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  name: String,
  email: { type: String, unique: true },
  password: String,
});

// Pre-save hook to hash the password before saving to the database
userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    try {
      const salt = await bcrypt.genSalt(10); // Generate a salt
      this.password = await bcrypt.hash(this.password, salt); // Hash the password
      next();
    } catch (err) {
      next(err);
    }
  } else {
    next();
  }
});

const User = mongoose.model("User", userSchema);

// Routes
app.post("/api/users/register", async (req, res) => {
  const { username, name, email, password } = req.body;
  try {
    // Check if username already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).send({ message: "Username is already taken" });
    }

    // Check if email already exists
    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      return res.status(400).send({ message: "Email is already registered" });
    }

    const user = new User({ username, name, email, password });
    await user.save();
    res.status(201).send({ message: "User registered successfully!" });
  } catch (err) {
    res.status(400).send({ message: "Error registering user", error: err });
  }
});

app.post("/api/users/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).send({ message: "Invalid credentials" });
    }

    // Compare the password entered by the user with the hashed password in the database
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).send({ message: "Invalid credentials" });
    }

    res.status(200).send({
      message: "Login successful!",
      username: user.username, // Send the username in the response
    });
  } catch (err) {
    res.status(500).send({ message: "Server error", error: err });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
