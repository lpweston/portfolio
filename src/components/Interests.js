import React from "react";
import { interests } from "../api/data";

const Interests = () => {
  return (
    <div id="interests" className="box">
      <h2>Interests</h2>
      <ul>
        {interests.map((interest, i) => {
          return <li key={i}>{interest}</li>;
        })}
      </ul>
    </div>
  );
};

export default Interests;
