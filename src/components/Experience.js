import React from "react";
import { experience } from "./data";

const Experience = () => {
  return (
    <ul key="Experience" className="box Experience">
      <h2>Experience</h2>
      {experience.map(job => {
        return (
          <li key={job.company}>
            <h3>{job.title}</h3>
            <p>
              {job.company} &middot; {job.dates} &middot; {job.location}
            </p>
            {job.description && <p>{job.description}</p>}
          </li>
        );
      })}
    </ul>
  );
};

export default Experience;
