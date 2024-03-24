import "./about.css";

export default function About({isDarkMode}) {
  return (
    <>
      <div className="about-container">
        <h2>About</h2>
        <div className="grid-view">
        <div className="grid-center">
            <div className={`circle ${isDarkMode ? "dark-mode" : "light-mode"}`}></div>
            <div className={`circle ${isDarkMode ? "dark-mode" : "light-mode"}`}></div>
            <div className={`circle ${isDarkMode ? "dark-mode" : "light-mode"}`}></div>
            <div className={`circle ${isDarkMode ? "dark-mode" : "light-mode"}`}></div>
          </div>
          <div className="grid-left">
            <div className="left-content">
              <p>ELEMENTARY</p>
             
            </div>
            <div className="left-content">
              <p>JUNIOR HIGH SCHOOL</p>
              
            </div>
            <div className="left-content">
              <p>SENIOR HIGH SCHOOL</p>
             
            </div>
            <div className="left-content">
              <p>COLLEGE</p>
              
            </div>
          </div>
          <div className="grid-right">
            <div className="left-right">
              <p>
              QUEZON ELEMENTARY SCHOOL | 2013
              </p>
            </div>
            <div className="left-right">
              <p>
              SACRED HEART COLLEGE INC. | 2017
              </p>
            </div>
            <div className="left-right">
              <p>
              JOSE RIZAL MEMORIAL STATE UNIVERSITY | 2019
              </p>
            </div>
            <div className="left-right">
              <p>
              JOSE RIZAL MEMORIAL STATE UNIVERSITY | 2023
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
