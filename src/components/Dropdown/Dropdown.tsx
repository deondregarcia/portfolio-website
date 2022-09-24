import React, { useState } from "react";
import { BsFillCaretDownFill } from 'react-icons/bs';
import "./Dropdown.css";

const Dropdown = ({ observedSection }: { observedSection: string }) => {
  const [selected, setSelected] = useState(false);

  return (
    <div className="dropdown-container">
      <div onClick={() => setSelected(!selected)} className="input-box">
        <h3>{observedSection === "blissely" ? "Blissely" : (observedSection === "photo-website" ? "Photography Website" : (observedSection === "bird-nest" ? "Bird Nest" : (observedSection === "crypto-bot" ? "Crypto Trading Bot" : "Landing")))}</h3>
        <BsFillCaretDownFill className={selected ? "dropdown-caret caret-selected" : "dropdown-caret"} size={20}/>
      </div>
      <div className="dropdown-list-wrapper">
        <div
          className={
            selected ? "dropdown-list dropdown-list-selected" : "dropdown-list"
          }
        >
          <a href="#blissely">
          <div
            onClick={() => setSelected(false)}
            className="dropdown-list-container"
          >
              <p className="dropdown-list-text">Blissely</p>
          </div>
            </a>
            <a href="#photo-website">
          <div
            onClick={() => setSelected(false)}
            className="dropdown-list-container"
          >
              <p className="dropdown-list-text">Photography Website</p>
          </div>
            </a>
            <a href="#bird-nest">
          <div
            onClick={() => setSelected(false)}
            className="dropdown-list-container"
          >
              <p className="dropdown-list-text">Bird Nest</p>
          </div>
            </a>
            <a href="#trading-bot">
          <div
            onClick={() => setSelected(false)}
            className="dropdown-list-container"
          >
              <p className="dropdown-list-text">Crypto Trading Bot</p>
          </div>
            </a>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
