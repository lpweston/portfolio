import React from "react";
import { education } from "./data";

class Education extends React.Component {
  state = { education };
  render() {
    console.log(this.state);
    return (
      <ul key="Education" className="box Education">
        <h2>Education</h2>
        {this.state.education.map(edu => {
          return (
            <li key={edu.institution}>
              <h3>{edu.title}</h3>
              <p>
                {edu.institution} &middot; {edu.dates}
              </p>
              {edu.description && (
                <ul>
                  {edu.description.map(point => {
                    return <li>{point}</li>;
                  })}
                  <br />
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Education;
