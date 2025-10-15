// src/pages/Projects.jsx
import React from "react";
import "./Projects.css";

export default function Projects() {
  const projects = [
    {
      title: "School Projects",
      image: "/Images/Projects.jpg", // put a placeholder image in /public/Images/
      description:
        "A collection of assignments and projects I have completed as part of my programming coursework.",
      role: "Developed various small applications and exercises to strengthen my programming skills.",
      link: "https://github.com/TylerHayward?tab=repositories",
    }
  ];

  return (
    <div className="projects-container">
      <h1>My Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p><strong>My Role:</strong> {project.role}</p>
            <div className="project-links">
              <a href={project.link} target="_blank" rel="noreferrer">
                GitHub Repo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
