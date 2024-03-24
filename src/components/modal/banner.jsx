import React from "react";
import cert4 from "../img/cert4.png"

export default function Banner({ onClose, isDarkMode }){
    return(
        <>
          <div className="modal-overlay" onClick={onClose}>
            <div className="modal-container" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <h3>LuminesCE | March 2022</h3>
                    <button className={`close-btn ${isDarkMode? "dark-mode" : "light-mode"}`} onClick={onClose}>X</button>
                </div>
                <div className="modal-body">
                <img src={cert4} alt="cert4" />
          <p>
          LuminesCE: Emblazing Minds Through Specializations Towards a Sustainable Nation - WATER RESOURCES & GEOTECHNICAL ENGINEERING SPECIALIZATION WEBINAR 
(Pamantasan ng Lungsod ng Maynila) | March 2022
          </p>
                </div>
            </div>
        </div>
        </>
    );
}