// src/pages/About.js
import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="about-container">
      <h1>About Me</h1>
      <div className="about-content">
        <img src="/Images/PFP.jpg" alt="Tyler Hayward" className="profile-pic" />
        <div className="about-text">
          <p>
            My name is <strong>Tyler Hayward</strong>. I am a student learning web
            and software development. I enjoy building projects that combine creativity 
            and problem-solving, and I’m always striving to improve my skills.
          </p>
          <p>
            Outside of coding, I enjoy playing games like <em>Baldur’s Gate 3</em> 
            and <em>Elden Ring</em>. I also love biking and spending time with animals.
          </p>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            📄 Download My Resume
          </a>
        </div>
      </div>

      <div className="skills-section">
        <h2>Skills</h2>
        <ul>
          <li>⚛️ React & JavaScript</li>
          <li>💻 HTML & CSS</li>
          <li>🛠️ Git & Version Control</li>
        </ul>
      </div>
    </div>
  );
}
