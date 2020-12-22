import React from "react";
import { education } from "../api/data";

const Education = () => {
  return (
    <ul key="Education" className="box Education">
      <h2>Education</h2>
      {education.map((edu) => {
        return (
          <li key={edu.institution}>
            <h3>{edu.title}</h3>
            <p>
              {edu.institution} &middot; {edu.dates}
            </p>
            {edu.description && (
              <ul>
                {edu.description.map((point, i) => {
                  return <li key={i}>{point}</li>;
                })}
                <br />
              </ul>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default Education;
