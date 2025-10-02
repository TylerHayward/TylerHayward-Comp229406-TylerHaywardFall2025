// src/pages/Contact.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Contact.css";

export default function Contact() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your message has been received.`);
    navigate("/");
  };

  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <div className="contact-content">
        {/* Contact Info */}
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p><strong>Email:</strong> <a href="mailto:tylerhayward136@gmail.com">tylerhayward136@gmail.com</a></p>
          <p><strong>Phone:</strong> 647-529-9247</p>
        </div>

        {/* Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name}
              onChange={handleChange}
              required 
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email}
              onChange={handleChange}
              required 
            />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea 
              id="message" 
              name="message" 
              rows="5" 
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn">Send Message</button>
        </form>
      </div>
    </div>
  );
}
