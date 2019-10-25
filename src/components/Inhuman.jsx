import React, { Component } from "react";

class Inhuman extends Component {
  render() {
    return (
      <div className="Main">
        <div className="box" id="inhu-info">
          <img
            src={require("../images/inhumanfont1.png")}
            alt="Inhuman Game"
            width="90%"
          />
          <p>
            Inhuman is a text based adventure game. Written by James Weston and
            developed by myself in ReactJS.
          </p>
          <h3>Links</h3>
          <ul>
            <li>
              <a
                href="https://inhuman.netlify.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Hosted Game
              </a>
            </li>
            <li>
              <a
                href="https://github.com/lpweston/game"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github Repo
              </a>
            </li>
          </ul>
          <h3>Tech Stack</h3>
          <ul>
            <li>React.JS</li>
            <li>Javascript</li>
          </ul>
        </div>
        <div className="box" id="inhu-img">
          <img
            src={require("../images/inhuman.png")}
            alt="Pictuar Puzzle"
            width="100%"
          />
        </div>
      </div>
    );
  }
}

export default Inhuman;
