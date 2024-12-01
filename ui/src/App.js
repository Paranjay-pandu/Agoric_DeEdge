import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import "./index.css"; // or wherever your Tailwind CSS is located

import Login from "./components/Login";
import Home from "./components/Home"; // Assuming you have this component
import Nft from "./components/Nft";
import Details from "./components/Details";
import Details2 from "./components/Details";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />{" "}
        {/* Make sure Register page is set to '/' */}
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/nfts" element={<Nft />} />
        <Route path="/details" element={<Details />} />
        <Route path="/details2" element={<Details2 />} />
      </Routes>
    </Router>
  );
};

export default App;
