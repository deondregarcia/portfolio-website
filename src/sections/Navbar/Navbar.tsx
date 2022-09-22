import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <a href="#landing">
        <h3 className="navbar-header">Deondre Garcia's Portfolio</h3>
      </a>
      <div className="navbar-links-container">
        <a href="#blissely">
          <p className="navbar-link">Blissely</p>
        </a>
        <a href="#photo-website">
          <p className="navbar-link">Photography Website</p>
        </a>
        <a href="#bird-nest">
          <p className="navbar-link">Bird Nest</p>
        </a>
        <a href="#trading-bot">
          <p className="navbar-link">Crypto Trading Bot</p>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
