import React, { useState } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ShareIcon from "@mui/icons-material/Share";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import axios from "axios";
import Stack from "@mui/material/Stack";
import LinearProgress from "@mui/material/LinearProgress";
import "./contact.css";
import build from "../img/build.png";

export default function Contact({ isDarkMode }) {
  const currentYear = new Date().getFullYear();

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({
    fullname: "",
    email: "",
    subject: "",
    message: "",
  });

  // New state to track form submission status
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateEmail = (email) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setIsSubmitting(true); // Set submission status to true

  //   let errors = {};

  //   if (formData.fullname.trim() === "") {
  //     errors.fullname = "Full name is required";
  //   }
  //   if (formData.email.trim() === "") {
  //     errors.email = "Email is required";
  //   } else if (!validateEmail(formData.email)) {
  //     errors.email = "Invalid email address";
  //   }
  //   if (formData.subject.trim() === "") {
  //     errors.subject = "Subject is required";
  //   }
  //   if (formData.message.trim() === "") {
  //     errors.message = "Message is required";
  //   }

  //   setFormErrors(errors);

  //   if (Object.keys(errors).length === 0) {
  //     axios
  //       .post("https://darkdave.pythonanywhere.com/api/contact/", formData, {
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       })
  //       .then((response) => {
  //         setFormData({
  //           fullname: "",
  //           email: "",
  //           subject: "",
  //           message: "",
  //         });
  //         setIsSubmitting(false); // Reset submission status after successful submission
  //       })
  //       .catch((error) => {
  //         console.error("Error submitting form:", error);
  //         setIsSubmitting(false); // Reset submission status after failed submission
  //       });
  //   } else {
  //     setIsSubmitting(false); // Reset submission status if there are errors
  //   }
  // };

  return (
    <>
      <div className="contact-container">
        <img src={build} alt="build" className="build" />
        <div className="contact-grid">
        <div className="up-left">
            <div
              className={`up-left-content ${
                isDarkMode ? "dark-mode" : "light-mode"
              }`}
            >
              <div className="icon-container">
                <LocationOnIcon />
              </div>
              <div className="personal-info">
                <div className="personal-info-up">
                  <h4>Address</h4>
                </div>
                <div className="personal-info-down">
                  <p>Baliangao, Misamis Occidental PH</p>
                </div>
              </div>
            </div>
            <div
              className={`up-left-content ${
                isDarkMode ? "dark-mode" : "light-mode"
              }`}
            >
              <div className="icon-container">
                <MailOutlineIcon />
              </div>
              <div className="personal-info">
                <div className="personal-info-up">
                  <h4>Email</h4>
                </div>
                <div className="personal-info-down">
                  <p>charmaine@gmail.com</p>
                </div>
              </div>
            </div>
            <div
              className={`up-left-content ${
                isDarkMode ? "dark-mode" : "light-mode"
              }`}
            >
              <div className="icon-container">
                <ShareIcon />
              </div>
              <div className="personal-info">
                <div className="personal-info-up">
                  <h4>Social Media</h4>
                </div>
                <div className="personal-info-icon">
                  <a
                    className={`a-icons ${
                      isDarkMode ? "dark-mode" : "light-mode"
                    }`}
                    href="https://www.facebook.com/charmaine.aricayos"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FacebookIcon />
                  </a>
                  <a
                    className={`a-icons ${
                      isDarkMode ? "dark-mode" : "light-mode"
                    }`}
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <InstagramIcon />
                  </a>
                  <a
                    className={`a-icons ${
                      isDarkMode ? "dark-mode" : "light-mode"
                    }`}
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedInIcon />
                  </a>
                  
                </div>
              </div>
            </div>
            <div
              className={`up-left-content ${
                isDarkMode ? "dark-mode" : "light-mode"
              }`}
            >
              <div className="icon-container">
                <PhoneEnabledIcon />
              </div>
              <div className="personal-info">
                <div className="personal-info-up">
                  <h4>Phone</h4>
                </div>
                <div className="personal-info-down">
                  <p>+6391231231231</p>
                </div>
              </div>
            </div>
          </div>
          <div className={`down ${isDarkMode ? "dark-mode" : "light-mode"}`}>
            {isSubmitting && (
              <Stack sx={{ width: "100%", color: "grey.500" }} spacing={2}>
                <LinearProgress color="secondary" />
              </Stack>
            )}
            <h4>Contact Me</h4>
            <div className="name-email">
              {formErrors.fullname && (
                <span className="error-fullname">{formErrors.fullname}</span>
              )}
              <input
                className={`input-fields ${
                  isDarkMode ? "dark-mode" : "light-mode"
                }`}
                type="text"
                name="fullname"
                placeholder="Full Name"
                value={formData.fullname}
                onChange={handleInputChange}
              />
              <input
                className={`input-fields ${
                  isDarkMode ? "dark-mode" : "light-mode"
                }`}
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
              />
              {formErrors.email && (
                <span className="error-email">{formErrors.email}</span>
              )}
            </div>
            <div className="subject">
              <input
                className={`input-fields ${
                  isDarkMode ? "dark-mode" : "light-mode"
                }`}
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleInputChange}
              />
              {formErrors.subject && (
                <span className="error-subject">{formErrors.subject}</span>
              )}
            </div>
            <div className="message">
              <input
                className={`input-fields-message ${
                  isDarkMode ? "dark-mode" : "light-mode"
                }`}
                type="text"
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleInputChange}
              />
              {formErrors.message && (
                <span className="error-message">{formErrors.message}</span>
              )}
            </div>

            {/* {isSubmitting && <CircularProgress color="secondary" />} */}
            <button className="button-send" onClick={handleSubmit}>
              Send
            </button>
          </div>
        </div>

        <div className="footer">
          <p>© {currentYear} Charmaine Aricayos | All rights reserved.</p>
        </div>
      </div>
    </>
  );
}
