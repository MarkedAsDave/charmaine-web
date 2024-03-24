import React, { useState } from "react";
import "../styles/globalstyles.css";
import "./project.css";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import Invitation from "../modal/invitation";
import Logo from "../modal/logo";
import Sticker from "../modal/sticker";
import Banner from "../modal/banner";
import Cert5 from "../modal/cert5";
import Cert6 from "../modal/cert6";
import cert1  from "../img/cert1.png"
import cert2  from "../img/cert2.png"
import cert3  from "../img/cert3.png"
import cert4  from "../img/cert4.png"
import cert5  from "../img/cert5.png"
import cert6  from "../img/cert6.png"

export default function Projects({ isDarkMode }) {
  const [showInvitation, setShowInvitation] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [showLogo, setShowLogo] = useState(false);
  const [showSticker, setShowSticker] = useState(false);
  const [showCert5, setShowCert5] = useState(false);
  const [showCert6, setShowCert6] = useState(false);

  const handleCert6 = () => {
    setShowCert6(!showCert6);
  };

  const handleCloseCert6 = () => {
    setShowCert6(false);
  };

  const handleCert5 = () => {
    setShowCert5(!showCert5);
  };

  const handleCloseCert5 = () => {
    setShowCert5(false);
    console.log("naclick");
  };

  const handleInvitation = () => {
    setShowInvitation(!showInvitation);
  };

  const handleCloseInvitation = () => {
    setShowInvitation(false);
  };

  const handleBanner = () => {
    setShowBanner(!showBanner);
  };

  const handleLogo = () => {
    setShowLogo(!showLogo);
  };

  const handleSticker = () => {
    setShowSticker(!showSticker);
  };

  const handleCloseBanner = () => {
    setShowBanner(false);
  };

  const handleCloseLogo = () => {
    setShowLogo(false);
  };

  const handleCloseSticker = () => {
    setShowSticker(false);
  };

  return (
    <>
      <div
        className={`project-container ${
          isDarkMode ? "dark-mode" : "light-mode"
        }`}
      >
        <div className="project-content">
          <div className="horizontal">
            <div
              className={`view-btn ${isDarkMode ? "dark-mode" : "light-mode"}`}
              onClick={handleInvitation}
            >
              {" "}
              <img src={cert1} alt="cert1" />

              <div className="details">
              <h4>
                ariCE | November 2021
              </h4>
              <CardMembershipIcon fontSize="large"/>
              </div>
            </div>
            <div
              className={`view-btn ${isDarkMode ? "dark-mode" : "light-mode"}`}
              onClick={handleBanner}
            >
              {" "}
              <img src={cert4} alt="cert4" />

              <div className="details">
              <h4>
              LuminesCE | March 2022
              </h4>
              <CardMembershipIcon fontSize="large" />
              </div>
            </div>
            <div
              className={`view-btn ${isDarkMode ? "dark-mode" : "light-mode"}`}
              onClick={handleCert5}
            >
              {" "}
              <img src={cert5} alt="cert5" />

             <div className="details">
             <h4>
             LuminesCE | March 2022
              </h4>
              <CardMembershipIcon fontSize="large"/>
             </div>
            </div>
          </div>
          <div className="horizontal">
            <div
              className={`view-btn ${isDarkMode ? "dark-mode" : "light-mode"}`}
              onClick={handleSticker}
            >
              {" "}
              <img src={cert2} alt="cert2" />
 
            <div className="details">
            <h4>
                PAGLAUM | March 2022
              </h4>
              <CardMembershipIcon fontSize="large"/>
            </div>
            </div>
            <div
              className={`view-btn ${isDarkMode ? "dark-mode" : "light-mode"}`}
              onClick={handleLogo}
            >
              {" "}
              <img src={cert3} alt="cert3" />

             <div className="details">
             <h4>
                TECH-UP | March 2022
              </h4>
              <CardMembershipIcon fontSize="large"/>
             </div>
            </div>
            <div
              className={`view-btn ${isDarkMode ? "dark-mode" : "light-mode"}`}
              onClick={handleCert6}
            >
              {" "}
              <img src={cert6} alt="cert6" />
             
           <div className="details"> 
           <h4>
                
                PICESKope | April 2022
              </h4>
              <CardMembershipIcon fontSize="large"/>
           </div>
            </div>
          </div>
        </div>
      </div>
      {showInvitation && <Invitation onClose={handleCloseInvitation} />}
      {showBanner && <Banner onClose={handleCloseBanner} />}
      {showSticker && <Sticker onClose={handleCloseSticker} />}
      {showLogo && <Logo onClose={handleCloseLogo} />}
      {showCert5 && <Cert5 onClose={handleCloseCert5} />}
      {showCert6 && <Cert6 onClose={handleCloseCert6}/>}
    </>
  );
}
