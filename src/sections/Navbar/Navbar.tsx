import React from "react";
import Dropdown from "../../components/Dropdown/Dropdown";
import "./Navbar.css";

const Navbar = ({ observedSection }: { observedSection: string }) => {
  return (
    <div className="navbar-container">
      <a href="#landing">
        <h3 className="navbar-header">Deondre Garcia's Portfolio</h3>
        <div className="navbar-header-small">
          <h3>Deondre Garcia</h3>
        </div>
      </a>
      <div className="navbar-links-container">
        <a href="#blissely">
          <p
            className={
              observedSection === "blissely"
                ? "navbar-link link-selected"
                : "navbar-link"
            }
          >
            Blissely
          </p>
        </a>
        <a href="#photo-website">
          <p
            className={
              observedSection === "photo-website"
                ? "navbar-link link-selected"
                : "navbar-link"
            }
          >
            Photography Website
          </p>
        </a>
        <a href="#bird-nest">
          <p
            className={
              observedSection === "bird-nest"
                ? "navbar-link link-selected"
                : "navbar-link"
            }
          >
            Bird Nest
          </p>
        </a>
        <a href="#trading-bot">
          <p
            className={
              observedSection === "crypto-bot"
                ? "navbar-link link-selected"
                : "navbar-link"
            }
          >
            Crypto Trading Bot
          </p>
        </a>
      </div>
      <div className="dropdown-wrapper">
        <Dropdown observedSection={observedSection} />
      </div>
    </div>
  );
};

export default Navbar;
