// src/pages/Home.js
import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"; // add styles for polish

export default function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1 className="welcome-title">Welcome to My Portfolio</h1>
        <p className="mission-statement">
          🚀 Striving to grow as a programmer and web developer, 
          constantly learning and building meaningful projects.
        </p>
        
        <div className="home-buttons">
          <Link to="/about" className="btn">
            Learn More About Me
          </Link>
          <Link to="/projects" className="btn btn-secondary">
            View My Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
