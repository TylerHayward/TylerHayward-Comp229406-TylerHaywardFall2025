// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      {/* This assumes your logo image is in public/Images/IMG_1009.jpg */}
      <img
        src="/Images/PFP.jpg" // Make sure this path is correct for your actual logo!
        alt="My Portfolio Logo"
        className="navbar-logo"
      />

      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}
