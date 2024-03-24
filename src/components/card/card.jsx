import React from "react";
import "./card.css";
import "../styles/globalstyles.css";

export default function Card({ title, photo, logo, buttonText, buttonLink, isDarkMode }) {
  return (
    <div className={`card-container ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <img className="photo" src={photo} alt={`${title} photo`} />
      <div className="card-footer">
        <div className="title-button">
          <h4 className={`title ${isDarkMode ? "dark-mode" : "light-mode"}`}>{title}</h4>
          <a href={buttonLink} target="_blank" rel="noopener noreferrer">
            <button className={`button ${isDarkMode ? "dark-mode" : "light-mode"}`}>{buttonText}</button>
          </a>
        </div>
        <div className="logo-container">
          <img className="logo" src={logo} alt={`${title} logo`} />
        </div>
      </div>
    </div>
  );
}
