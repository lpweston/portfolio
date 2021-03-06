import React from "react";
import { projects } from "../api/data";
import { Link } from "@reach/router";

const Projects = () => {
  return (
    <div className="box" id="projects">
      <h2>Projects</h2>
      <div id="project-box">
        {projects.map((project) => {
          return (
            <div className="bubble" key={project.name}>
              <Link to={project.url} target="_blank" rel="noopener noreferrer">
                <img src={project.image} alt={project.name} width="100%" />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
