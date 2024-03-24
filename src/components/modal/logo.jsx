import React from "react";
import cert3 from "../img/cert3.png";

export default function Logo({ onClose, isDarkMode }) {
  return (
    <>
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-container" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <h3>TECH-UP | March 2022</h3>
            <button
              className={`close-btn ${isDarkMode ? "dark-mode" : "light-mode"}`}
              onClick={onClose}
            >
              X
            </button>
          </div>
          <div className="modal-body">
            <img src={cert3} alt="cert3" />
            <p>
              TECH-UP: Let's TECH your Knowledge UP to the Next Level (RIZAL
              TECHNOLOGICAL UNIVERSITY) | March 2022
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
