import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSpring, animated } from "react-spring";

import { FaEthereum, FaRegClock } from "react-icons/fa";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./Home.css"; // Custom CSS for additional styling
import gifLogo from "./Logo.jpeg";
const Nft = () => {
  // Get the username from localStorage
  const username = localStorage.getItem("username");
  const hoverEffect = useSpring({
    transform: "scale(1.05)",
    config: { tension: 170, friction: 26 },
  });
  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div
        className="sidebar bg-dark text-white  py-5 px-3"
        style={{ marginTop: "55px" }}
      >
        <ul className="nav flex-column">
          <li
            className="nav-item mb-2"
            style={{ backgroundColor: "gray", borderRadius: "20px" }}
          >
            <a className="nav-link text-white" href="/nfts">
              NFTs
            </a>
          </li>
          <li className="nav-item mb-2">
            <a className="nav-link text-white" href="/wallet">
              Wallet
            </a>
          </li>
          <li className="nav-item mb-2">
            <a className="nav-link text-white" href="/transactions">
              Transactions
            </a>
          </li>
          <li className="nav-item mb-2">
            <a className="nav-link text-white" href="/staking">
              Staking
            </a>
          </li>
          <li className="nav-item mb-2">
            <a className="nav-link text-white" href="/settings">
              Settings
            </a>
          </li>
        </ul>
      </div>

      <div className="main-content flex-grow-1">
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm py-3 fixed-top">
          <div className="container">
            <span className="navbar-brand text-white d-flex align-items-center">
              <img
                src={gifLogo} // Replace with the path to your GIF
                alt="Logo"
                className="navbar-logo me-2"
                style={{ width: "30px", height: "30px" }} // Adjust the size as needed
              />
              <span className="text-light fs-5 fw-semibold">
                DeEdge Dashboard
              </span>
            </span>
            <div className="ms-auto d-flex align-items-center">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto d-flex align-items-center">
                {/* Search Bar */}
                <li className="nav-item ">
                  <form className="d-flex">
                    <input
                      style={{ width: "40vw" }}
                      className="form-control search-bar custom-search-bar"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <button
                      className="btn btn-primary search-btn"
                      type="submit"
                    >
                      <i className="bi bi-search"></i> {/* Search icon */}
                    </button>
                  </form>
                </li>

                {/* Welcome Message */}
                <li className="nav-item ms-4">
                  <span className="text-light fs-5 fw-semibold">
                    Welcome,{" "}
                    <span className="text-warning">
                      {username ? username : "Guest"}
                    </span>
                    !
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div
          className="container"
          style={{
            paddingTop: "10px",
            marginTop: "0px",
            marginBottom: "150px",
          }}
        >
          {/* Categories Section */}
          <div className="row mb-4">
            <h2
              className="text-center text-primary mb-4"
              style={{ marginTop: "0px" }}
            >
              Explore Categories
            </h2>
            <div className="d-flex flex-wrap justify-content-center">
              <div
                className="category-item bg-gradient shadow-sm p-4 m-3 rounded text-center"
                style={{ textAlign: "center" }}
              >
                <i className="bi bi-brush text-primary mb-2 fs-1"></i>
                <h5 className="text-white">Art</h5>
              </div>
              <div
                className="category-item bg-gradient shadow-sm p-4 m-3 rounded text-center"
                style={{ textAlign: "center" }}
              >
                <i className="bi bi-music-note text-primary mb-2 fs-1"></i>
                <h5 className="text-white">Music</h5>
              </div>
              <div
                className="category-item bg-gradient shadow-sm p-4 m-3 rounded text-center"
                style={{ textAlign: "center" }}
              >
                <i className="bi bi-controller text-primary mb-2 fs-1"></i>
                <h5 className="text-white">Gaming</h5>
              </div>
              <div
                className="category-item bg-gradient shadow-sm p-4 m-3 rounded text-center"
                style={{ textAlign: "center" }}
              >
                <i className="bi bi-gem text-primary mb-2 fs-1"></i>
                <h5 className="text-white">Collectibles</h5>
              </div>
            </div>
          </div>

          {/* NFT Card Section */}
          <div className="row" style={{ marginTop: "50px" }}>
            <div
              className="d-flex justify-content-center w-100"
              style={{ gap: "93px" }}
            >
              <animated.div style={hoverEffect}>
                <Card
                  className="card-shadow custom-card gradient-card"
                  style={{
                    maxWidth: "900px",
                    padding: "23px",
                    width: "100%",
                    background: "linear-gradient(45deg, #00bcd4, #3f51b5)", // Blockchain color theme

                    borderRadius: "15px", // Rounded corners for a smoother look
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)", // Light shadow for depth
                  }}
                >
                  <Card.Body className="dark-card" style={{ color: "#fff" }}>
                    {/* Image Section */}
                    <div style={{ marginBottom: "20px", textAlign: "center" }}>
                      <img
                        src="https://picsum.photos/200/300" // Replace with the actual image URL
                        alt="NFT Collection"
                        style={{
                          width: "400px",
                          borderRadius: "10px",
                          height: "110px",
                          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)", // Light shadow for the image
                        }}
                      />
                    </div>

                    {/* Content Section */}
                    <div>
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <FaEthereum size={50} color="#fff" />
                        <h5
                          className="card-title text-white"
                          style={{ fontSize: "1.5rem", fontWeight: "600" }}
                        >
                          NFTs
                        </h5>
                      </div>
                      <p
                        className="text-white mb-4"
                        style={{ fontSize: "1rem" }}
                      >
                        Tushar{" "}
                      </p>
                      <Button
                        variant="outline-light"
                        href="/details2"
                        style={{
                          marginTop: "10px",
                          backgroundColor: "#00bcd4", // Button color to match the theme
                          color: "#fff",
                          border: "2px solid #00bcd4",
                          padding: "10px 20px",
                          fontWeight: "600",
                          borderRadius: "5px", // Rounded button corners
                        }}
                      >
                        $200
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </animated.div>
              <animated.div style={hoverEffect}>
                <Card
                  className="card-shadow custom-card gradient-card"
                  style={{
                    maxWidth: "900px",
                    padding: "23px",
                    width: "100%",
                    background: "linear-gradient(59deg, #00bcd4,  #8a2be2)", // Aqua to Indigo gradient

                    borderRadius: "15px", // Rounded corners for a smoother look
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)", // Light shadow for depth
                  }}
                >
                  <Card.Body className="dark-card" style={{ color: "#fff" }}>
                    {/* Image Section */}
                    <div style={{ marginBottom: "20px", textAlign: "center" }}>
                      <img
                        src="https://picsum.photos/200/300" // Replace with the actual image URL
                        alt="NFT Collection"
                        style={{
                          width: "400px",
                          borderRadius: "10px",
                          height: "110px",
                          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)", // Light shadow for the image
                        }}
                      />
                    </div>

                    {/* Content Section */}
                    <div>
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <FaEthereum size={50} color="#fff" />
                        <h5
                          className="card-title text-white"
                          style={{ fontSize: "1.5rem", fontWeight: "600" }}
                        >
                          NFTs
                        </h5>
                      </div>
                      <p
                        className="text-white mb-4"
                        style={{ fontSize: "1rem" }}
                      >
                        John Doe{" "}
                      </p>
                      <Button
                        variant="outline-light"
                        href="/details"
                        style={{
                          marginTop: "10px",
                          backgroundColor: "#00bcd4", // Button color to match the theme
                          color: "#fff",
                          border: "2px solid #00bcd4",
                          padding: "10px 20px",
                          fontWeight: "600",
                          borderRadius: "5px", // Rounded button corners
                        }}
                      >
                        $900
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </animated.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nft;
