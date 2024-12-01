const express = require('express');
const connectDB = require('./api/config/database');
const errorHandler = require('./api/middleware/errorHandler');
const agoricConfig = require('./api/config/agoricConfig');

const app = express();

app.use(express.json());

connectDB();

agoricConfig.initializeContracts();

// Routes
app.use('/api/users', require('./api/routes/userRoutes'));
app.use('/api/nft', require('./api/routes/nftRoutes'));
app.use('/api/subscriptions', require('./api/routes/subscriptionRoutes'));
app.use('/api/marketplace', require('./api/routes/marketplaceRoutes'));

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});