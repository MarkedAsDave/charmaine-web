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

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Set submission status to true

    let errors = {};

    if (formData.fullname.trim() === "") {
      errors.fullname = "Full name is required";
    }
    if (formData.email.trim() === "") {
      errors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      errors.email = "Invalid email address";
    }
    if (formData.subject.trim() === "") {
      errors.subject = "Subject is required";
    }
    if (formData.message.trim() === "") {
      errors.message = "Message is required";
    }

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      axios
        .post("https://darkdave.pythonanywhere.com/api/contact/", formData, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          setFormData({
            fullname: "",
            email: "",
            subject: "",
            message: "",
          });
          setIsSubmitting(false); // Reset submission status after successful submission
        })
        .catch((error) => {
          console.error("Error submitting form:", error);
          setIsSubmitting(false); // Reset submission status after failed submission
        });
    } else {
      setIsSubmitting(false); // Reset submission status if there are errors
    }
  };

  return (
    <>
      <div className="contact-container">
        <h3>Contact</h3>
        
        <div className="footer">
          <p>© {currentYear} Charmaine Aricayos | All rights reserved.</p>
        </div>
      </div>
    </>
  );
}
