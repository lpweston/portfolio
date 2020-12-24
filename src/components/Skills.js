import React from "react";
import { skills } from "../api/data";
import pluralsightImg from "../images/PS_logo_F-01.png";
import pluralsightSkill from "../images/pluralsight.svg";

const Skills = () => {
  return (
    <div id="skills" className="box">
      <h2>
        <a href="https://app.pluralsight.com/profile/laura-weston" target="_blank" rel="noopener noreferrer">
          <img src={pluralsightImg} alt="PuralSight" height="45px"/>
          <img src={pluralsightSkill} alt="Skills"></img>
        </a>
      </h2>
      <ul id="skill-list">
        {skills.map((skill) => {
          return (<li key={skill.id} className="skill-item">
            <div className="skill-row">
              <img src={skill.thumbnailUrl} alt={skill.url} width="50px" height="50px"></img> 
              <h3>{skill.title}</h3>
            </div>
              <progress className="skill-row" value={skill.score} max="300">skill.score</progress>
            </li>);
        })}
      </ul>
    </div>
  );
};

export default Skills;
