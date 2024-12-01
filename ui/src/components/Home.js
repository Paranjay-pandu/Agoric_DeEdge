import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSpring, animated } from "react-spring";

import { FaEthereum, FaRegClock } from "react-icons/fa";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./Home.css"; // Custom CSS for additional styling
import gifLogo from "./Logo.jpeg";
const Home = () => {
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
          <li className="nav-item mb-2">
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

        {/* Main Content */}
        <Container className="py-5">
          {/* Dashboard Layout with two sections: Cards on the left and Blogs on the right */}
          <Row className="g-4">
            {/* Left Section: Cards for NFTs, Wallet, Transactions, Staking */}
            <Col md={4} className="left-section">
              <Row className="g-4">
                <Col sm={12}>
                  <animated.div style={hoverEffect}>
                    <Card className="card-shadow custom-card gradient-card">
                      <Card.Body className="dark-card">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                          <FaEthereum size={50} color="#fff" />
                          <h5 className="card-title text-white">NFTs</h5>
                        </div>
                        <p className="text-white mb-4">
                          Manage and explore your NFTs collection on the
                          blockchain.
                        </p>
                        <Button variant="outline-light" href="/nfts">
                          Explore NFTs
                        </Button>
                      </Card.Body>
                    </Card>
                  </animated.div>
                </Col>

                <Col sm={12}>
                  <animated.div style={hoverEffect}>
                    <Card className="card-shadow custom-card gradient-card">
                      <Card.Body className="dark-card">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                          <FaEthereum size={50} color="#fff" />
                          <h5 className="card-title text-white">Wallet</h5>
                        </div>
                        <p className="text-white mb-4">
                          Manage your crypto wallet securely.
                        </p>
                        <Button variant="outline-light" href="/wallet">
                          View Wallet
                        </Button>
                      </Card.Body>
                    </Card>
                  </animated.div>
                </Col>

                <Col sm={12}>
                  <animated.div style={hoverEffect}>
                    <Card className="card-shadow custom-card gradient-card">
                      <Card.Body className="dark-card">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                          <FaEthereum size={50} color="#fff" />
                          <h5 className="card-title text-white">
                            Transactions
                          </h5>
                        </div>
                        <p className="text-white mb-4">
                          View and manage your blockchain transactions.
                        </p>
                        <Button variant="outline-light" href="/transactions">
                          View Transactions
                        </Button>
                      </Card.Body>
                    </Card>
                  </animated.div>
                </Col>

                <Col sm={12}>
                  <animated.div style={hoverEffect}>
                    <Card className="card-shadow custom-card gradient-card">
                      <Card.Body className="dark-card">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                          <FaEthereum size={50} color="#fff" />
                          <h5 className="card-title text-white">Staking</h5>
                        </div>
                        <p className="text-white mb-4">
                          Stake your crypto and earn rewards securely.
                        </p>
                        <Button variant="outline-light" href="/staking">
                          Start Staking
                        </Button>
                      </Card.Body>
                    </Card>
                  </animated.div>
                </Col>
              </Row>
            </Col>

            {/* Right Section: Blogs/News */}
            <Col md={7} className="right-section">
              <Row className="g-4">
                <Col sm={12}>
                  <Card className="custom-card news-card gradient-card dark-card">
                    <Row>
                      <Col md={4}>
                        <img
                          src="https://plus.unsplash.com/premium_photo-1681400678259-255b10890b08?q=80&w=2358&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          alt="NFT Future"
                          className="img-fluid rounded-start "
                        />
                      </Col>
                      <Col md={8}>
                        <Card.Body>
                          <h5 className="card-title text-white">
                            The Future of NFTs
                          </h5>
                          <p className="card-text text-white">
                            Explore how NFTs are reshaping the digital landscape
                            and the future of collectibles.
                          </p>
                          <Button
                            variant="outline-light"
                            href="/future-of-nfts"
                          >
                            Read More
                          </Button>
                        </Card.Body>
                      </Col>
                    </Row>
                  </Card>
                </Col>

                <Col sm={12}>
                  <Card className="custom-card news-card gradient-card dark-card">
                    <Row>
                      <Col md={4}>
                        <img
                          src="https://plus.unsplash.com/premium_photo-1682310068925-2135e638d58b?q=80&w=2112&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          alt="Crypto Staking"
                          className="img-fluid rounded-start"
                        />
                      </Col>
                      <Col md={8}>
                        <Card.Body>
                          <h5 className="card-title text-white">
                            Crypto Staking Explained
                          </h5>
                          <p className="card-text text-white">
                            Learn everything you need to know about staking your
                            tokens for rewards.
                          </p>
                          <Button
                            variant="outline-light"
                            href="/crypto-staking"
                          >
                            Learn More
                          </Button>
                        </Card.Body>
                      </Col>
                    </Row>
                  </Card>
                </Col>
              </Row>
              <Col sm={14} className="mt-5">
                <Card className="custom-card news-card gradient-card dark-card">
                  <Card.Body>
                    <h5 className="card-title text-white">Recent Activity</h5>
                    <ul className="activity-list text-white">
                      <li>
                        <FaRegClock size={20} color="#aaa" /> Sent 1.5 ETH to
                        Wallet X
                      </li>
                      <li>
                        <FaRegClock size={20} color="#aaa" /> Staked 2000 tokens
                        for rewards
                      </li>
                      <li>
                        <FaRegClock size={20} color="#aaa" /> Purchased new NFT
                        from Collection Y
                      </li>
                      <li>
                        <FaRegClock size={20} color="#aaa" /> Transaction
                        confirmation for 3 ETH
                      </li>
                    </ul>
                  </Card.Body>
                </Card>
              </Col>
            </Col>
          </Row>

          {/* Bottom Section: Recent Activity/Transactions */}
          <Row className="g-4 mt-5"></Row>
        </Container>
      </div>
    </div>
  );
};

export default Home;
