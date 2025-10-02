// src/pages/Services.js
import React from "react";
import "./Services.css";

export default function Services() {
  return (
    <div className="services-container">
      <h1>My Services</h1>
      <p className="services-intro">
        As a student, I’m building my skills in the following area:
      </p>
      <div className="services-grid">
        <div className="service-card">
          <h2>💻 Programming Help</h2>
          <p>
            Assisting with beginner coding projects and problem-solving in multiple languages while I continue to learn and grow.
          </p>
        </div>
      </div>
    </div>
  );
}
