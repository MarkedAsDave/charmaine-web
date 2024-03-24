import React from "react";
import cert2 from "../img/cert2.png";

export default function Sticker({ onClose, isDarkMode }) {
  return (
    <>
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-container" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <h3>PAGLAUM | March 2022</h3>
            <button
              className={`close-btn ${isDarkMode ? "dark-mode" : "light-mode"}`}
              onClick={onClose}
            >
              X
            </button>
          </div>
          <div className="modal-body">
            <img src={cert2} alt="cert2" />
            <p>
              PAGLAUM: Illuminating Minds and Planning the Seed of Hope for a
              Greener Future through Environmental Engineering (ADAMSON
              UNIVERSITY) | March 2022
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
