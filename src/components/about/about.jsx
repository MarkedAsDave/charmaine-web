import "./about.css";
import back from "../img/back.png";

export default function About({ isDarkMode }) {
  return (
    <>
      <div className="about-container">
        <h2>About</h2>
        <div className="grid-view">
          <img src={back} alt="" />
          <div className="grid-left1">
            <div
              className={`left-content1 ${
                isDarkMode ? "dark-mode" : "light-mode"
              }`}
            >
              <p>2013</p>
            </div>
            <div
              className={`left-content1 ${
                isDarkMode ? "dark-mode" : "light-mode"
              }`}
            >
              <p>2017</p>
            </div>
            <div
              className={`left-content1 ${
                isDarkMode ? "dark-mode" : "light-mode"
              }`}
            >
              <p>2019</p>
            </div>
            <div
              className={`left-content1 ${
                isDarkMode ? "dark-mode" : "light-mode"
              }`}
            >
              <p>2023</p>
            </div>
          </div>
          <div className="grid-center">
            <div
              className={`circle ${isDarkMode ? "dark-mode" : "light-mode"}`}
            ></div>
            <div
              className={`circle ${isDarkMode ? "dark-mode" : "light-mode"}`}
            ></div>
            <div
              className={`circle ${isDarkMode ? "dark-mode" : "light-mode"}`}
            ></div>
            <div
              className={`circle ${isDarkMode ? "dark-mode" : "light-mode"}`}
            ></div>
          </div>
          <div className="grid-left">
            <div className="left-content">
              <p>ELEMENTARY | QUEZON ELEMENTARY SCHOOL</p>
            </div>
            <div className="left-content">
              <p>JUNIOR HIGH SCHOOL | SACRED HEART COLLEGE INC.</p>
            </div>
            <div className="left-content">
              <p>SENIOR HIGH SCHOOL | JOSE RIZAL MEMORIAL STATE UNIVERSITY </p>
            </div>
            <div className="left-content">
              <p>COLLEGE | JOSE RIZAL MEMORIAL STATE UNIVERSITY</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
