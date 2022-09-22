import React, { useState } from "react";
import "./Dropdown.css";

const Dropdown = ({ observedSection }: { observedSection: string }) => {
  const [selected, setSelected] = useState(false);

  return (
    <div className="dropdown-container">
      <div onClick={() => setSelected(true)} className="input-box">
        <h3>{observedSection}</h3>
      </div>
      <div className="dropdown-list-wrapper">
        <div
          className={
            selected ? "dropdown-list dropdown-list-selected" : "dropdown-list"
          }
        >
          <div
            onClick={() => setSelected(false)}
            className="dropdown-list-container"
          >
            <a href="#blissely">
              <p className="dropdown-list-text">Blissely</p>
            </a>
          </div>
          <div
            onClick={() => setSelected(false)}
            className="dropdown-list-container"
          >
            <a href="#photo-website">
              <p className="dropdown-list-text">Photography Website</p>
            </a>
          </div>
          <div
            onClick={() => setSelected(false)}
            className="dropdown-list-container"
          >
            <a href="#bird-nest">
              <p className="dropdown-list-text">Bird Nest</p>
            </a>
          </div>
          <div
            onClick={() => setSelected(false)}
            className="dropdown-list-container"
          >
            <a href="#trading-bot">
              <p className="dropdown-list-text">Crypto Trading Bot</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
