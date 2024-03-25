import React, { useState } from "react";
import "./home.css";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import "../styles/globalstyles.css";
import charm from "../img/charm.png";
import building from "../img/building.png"

export default function Home({ isDarkMode, getInTouch }) {
  const handleViewCV = () => {
    // Google Drive link to your CV
    const cvLink =
      " ";

    // Create a temporary link element
    const link = document.createElement("a");
    link.href = cvLink;

    // Set the target attribute to open the link in a new tab
    link.target = "_blank";

    // Append the link to the document body
    document.body.appendChild(link);

    // Trigger the click event on the link
    link.click();

    // Cleanup: Remove the link from the DOM
    document.body.removeChild(link);
  };

  return (
    <>
      <div className="home-container">
        <div className="left">
          <div className="content">
            <h1 className="name">CHARMAINE VELEZ</h1>
            <h1 className="surname">ARICAYOS</h1>
            <p> BACHELOR OR SCIENCE IN CIVIL ENGINEERING (BSCE)</p>
            <p>
              Hi, I'm Charmaine, your guide to the world of civil engineering
              wonders. Join me as we navigate through the landscapes of
              innovation and construction excellence.
            </p>
            <div className="content-btn">
              <button
                className={`btn-get ${isDarkMode ? "dark-mode" : "light-mode"}`}
                onClick={getInTouch}
              >
                GET IN TOUCH
              </button>
              <button
                className={`btn-cv ${isDarkMode ? "dark-mode" : "light-mode"}`}
                onClick={handleViewCV}
              >
                Download CV
                <CloudDownloadIcon fontSize="small" />
              </button>
            </div>
            <img src={building} alt="building" />
          </div>
        </div>
        <div className="right">
          <div className="dp">
            <img src={charm} alt="charm" />
          </div>
        </div>
      </div>
    </>
  );
}
