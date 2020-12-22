import React from "react";
import { skills } from "../api/data";

const Skills = () => {
  return (
    <div id="skills" className="box">
      <h2>Skills</h2>
      <ul id="skill-list">
        {skills.map((skill) => {
          return <li key={skill} >{skill}</li>;
        })}
      </ul>
    </div>
  );
};

export default Skills;
