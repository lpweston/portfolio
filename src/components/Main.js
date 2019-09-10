import React from "react";
import { projects, skills, interests, publications } from "./data";
import Contact from "./Contact";
import Experience from "./Experience";
import Education from "./Education";

class Main extends React.Component {
  state = { projects, skills, interests, publications };
  render() {
    return (
      <main className="Main">
        <div className="box" id="projects">
          <h2>Projects</h2>
          <div id="box_container">
            {this.state.projects.map(project => {
              return (
                <div className="bubble" id={this.state.projects.name}>
                  <a
                    href={this.state.projects.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={this.state.projects.image}
                      alt={this.state.projects.name}
                    />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
        <div id="box_container">
          <div id="skills" className="box">
            <h2>Skills</h2>
            <ul id="skill-list">
              {this.state.skills.map(skill => {
                return <li>{skill}</li>;
              })}
            </ul>
          </div>
          <div id="prof-summary" className="box">
            <h2>Professional Summary</h2>
            <p>
              Junior software developer, with significant STEM experience. Laura
              is a Computational Chemistry PhD graduate, with experience working
              as a product development chemist.
            </p>
            <p>
              She developed a love for coding while working on her PhD course,
              using Fortran 90 and Python. After some years working in product
              development within the chemical industry, she rekindled a love for
              coding in her spare time. Before joining Northcoders July cohort:
              a 12 week coding school, learning JavaScript.
            </p>
            <p>
              Particularly interested in solving problems and make the world a
              better place; her aspiration are to work as a software developer
              at a company where her work will help people.
            </p>
          </div>
          <div id="interests" className="box">
            <h2>Interests</h2>
            <ul>
              {this.state.interests.map(interest => {
                return <li>{interest}</li>;
              })}
            </ul>
          </div>
        </div>
        <div id="publications" className="box">
          <h2>Publications</h2>
          <ul>
            {this.state.publications.map(pub => {
              return (
                <li>
                  <h3>{pub.name}</h3>
                  <em>{pub.date}</em> &middot; <em>{pub.location}</em> &middot;
                  <a href={pub.url} target="_blank" rel="noopener noreferrer">
                    Read Publication
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div id="box_container">
          <Experience />
          <Education />
          <Contact />
        </div>
      </main>
    );
  }
}
export default Main;
