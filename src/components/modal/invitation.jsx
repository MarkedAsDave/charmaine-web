import React from "react";
import "./modal.css";
import cert1 from "../img/cert1.png";

export default function Invitation({ onClose, isDarkMode }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>ariCE | November 2021</h3>
          <button
            className={`close-btn ${isDarkMode ? "dark-mode" : "light-mode"}`}
            onClick={onClose}
          >
            X
          </button>
        </div>
        <div className="modal-body">
          <img src={cert1} alt="cert1" />
          <p>
            ariCE: DEVELOPING CIVIL ENGINEERING TECHNOLOGIES THROUGH CHALLENGING
            TIMES (NEGROS ISLAND CIVIL ENGINEERING STUDENTS CONFERENCE 2021) |
            November 2021
          </p>
        </div>
      </div>
    </div>
  );
}
