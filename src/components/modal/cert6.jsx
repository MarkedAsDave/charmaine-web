import React from "react";
import cert6 from "../img/cert6.png";
export default function Cert6({ onClose, isDarkMode }) {
  return (
    <>
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-container" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <h3>PICESKope | April 2022</h3>
            <button
              className={`close-btn ${isDarkMode ? "dark-mode" : "light-mode"}`}
              onClick={onClose}
            >
              X
            </button>
          </div>
          <div className="modal-body">
            <img src={cert6} alt="cert6" />
            <p>
              PICESKope: Engineering the Future of Academic Research and
              Industry Practice, Focusing in the field of Environmental
              Engineering (PHILIPPINE INSTITUTE OF CIVIL ENGINEERS-SOUTH KOREA
              CHAPTER) | April 2022
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
