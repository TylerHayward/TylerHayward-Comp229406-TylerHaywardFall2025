// src/App.js (or App.jsx)
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// --- CORRECTED IMPORTS ---
import Navbar from './components/Navbar.jsx'; // Make sure folder name and file extension match
import Home from './pages/Home.jsx';         // Make sure folder name and file extension match
import About from './pages/About.jsx';
import Projects from './pages/Projects.jsx';
import Services from './pages/Services.jsx';
import Contact from './pages/Contact.jsx';
// --- END CORRECTED IMPORTS ---

import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
