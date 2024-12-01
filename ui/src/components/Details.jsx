import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSpring, animated } from "react-spring";

import { FaEthereum, FaRegClock } from "react-icons/fa";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./Home.css"; // Custom CSS for additional styling
import gifLogo from "./Logo.jpeg";
const Details = () => {
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
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "center",
            gap: "30px", // Increased gap for better separation
            margin: "40px auto",
            padding: "30px",
            borderRadius: "20px",
            boxShadow: "0 6px 20px rgba(0, 0, 0, 0.2)",
            color: "#fff",
            maxWidth: "1100px",
          }}
        >
          {/* Image Section */}
          <div style={{ flex: "1", textAlign: "center" }}>
            <img
              src="https://picsum.photos/200/300" // Replace with actual image URL
              alt="NFT Collection"
              style={{
                width: "100%",
                borderRadius: "15px",
                objectFit: "cover",
                boxShadow: "0 8px 20px rgba(0, 0, 0, 0.3)",
              }}
            />
          </div>

          {/* Details Section */}
          <div style={{ flex: "2", padding: "15px" }}>
            {/* Title */}
            <div style={{ marginBottom: "25px" }}>
              <h1
                style={{
                  fontSize: "2.8rem",
                  fontWeight: "700",
                  marginBottom: "15px",
                  lineHeight: "1.2",
                }}
              >
                NFT Collection Name
              </h1>
              <p
                style={{
                  fontSize: "1.1rem",
                  color: "#f5f5f5",
                  fontWeight: "500",
                }}
              >
                Created by: <strong>John Doe</strong> | Date:{" "}
                <strong>2024-12-01</strong>
              </p>
            </div>

            {/* Description */}
            <div style={{ marginBottom: "25px" }}>
              <h2
                style={{
                  fontSize: "1.6rem",
                  fontWeight: "600",
                  marginBottom: "10px",
                }}
              >
                About This Collection
              </h2>
              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: "1.6",
                  color: "#eaeaea",
                }}
              >
                This is a premium collection of NFTs showcasing unique digital
                art. Each piece in this collection has been meticulously crafted
                by renowned artists. Explore the creativity and immerse yourself
                in the world of blockchain-based collectibles.
              </p>
            </div>

            {/* Details */}
            <div style={{ marginBottom: "30px" }}>
              <h2
                style={{
                  fontSize: "1.6rem",
                  fontWeight: "600",
                  marginBottom: "10px",
                }}
              >
                Details
              </h2>
              <ul
                style={{
                  fontSize: "1rem",
                  lineHeight: "1.8",
                  color: "#f5f5f5",
                  paddingLeft: "20px",
                }}
              >
                <li>Blockchain: Ethereum</li>
                <li>Number of NFTs: 25</li>
                <li>Category: Digital Art</li>
                <li>Price Range: 0.5 - 2.5 ETH</li>
              </ul>
            </div>

            {/* Action Buttons */}
            <div>
              <button
                style={{
                  backgroundColor: "#00bcd4",
                  color: "#fff",
                  border: "none",
                  padding: "15px 40px",
                  fontWeight: "600",
                  borderRadius: "8px",
                  marginBottom: "9px",
                  cursor: "pointer",
                  fontSize: "1.1rem",
                  marginRight: "15px",
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
                  transition: "background-color 0.3s ease",
                }}
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor = "#00a3b8")
                }
                onMouseOut={(e) => (e.target.style.backgroundColor = "#00bcd4")}
                onClick={() => alert("Purchase Now!")}
              >
                Purchase Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
