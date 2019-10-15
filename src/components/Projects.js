import React from "react";
import { projects } from "./data";

const Projects = () => {
  return (
    <div className="box" id="projects">
      <h2>Projects</h2>
      <div id="project-box">
        {projects.map(project => {
          return (
            <div className="bubble" id={project.name}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <img src={project.image} alt={project.name} width="100%" />
                <h4>{project.name}</h4>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
