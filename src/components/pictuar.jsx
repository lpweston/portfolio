import React, { Component } from "react";

class pictuar extends Component {
  render() {
    return (
      <div className="Main">
        <div className="box" id="pic-info">
          <img
            src={require("../images/pictuartitle.png")}
            alt="Pictuar Puzzle"
            width="70%"
          />
          <p>
            Augmented reality puzzle game, created as final project for
            Northcoders bootcamp. Made with Adam, Joe and Will, in two weeks,
            using agile methodologies.
          </p>
          <p>
            Game involves using physical cards to create an image that can be
            seen through your devices camera. Players can select from preloaded
            images or upload their own from the camera reel.
          </p>
        </div>
        <div className="box" id="pic-vid">
          <iframe
            title="presentation"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/b_5aFGB0_y4"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div className="box" id="pic-img">
          <img
            src={require("../images/working.jpg")}
            alt="Pictuar Puzzle"
            width="100%"
          />
        </div>
        <div className="box" id="pic-lists">
          <h3>Links</h3>
          <ul>
            <li>
              <a
                href="https://github.com/lpweston/pictuar-puzzle"
                target="_blank"
                rel="noopener noreferrer"
              >
                Front End Github
              </a>
            </li>
            <li>
              <a
                href="https://github.com/lpweston/pictuar-puzzle-backend"
                target="_blank"
                rel="noopener noreferrer"
              >
                Back End Github
              </a>
            </li>
            <li>
              <a
                href="https://pictuar-puzzle.herokuapp.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Hosted Back End
              </a>
            </li>
          </ul>
          <h3>Tech Stack</h3>
          <ul>
            <li>React Native</li>
            <li>Viro React</li>
            <li>Xcode</li>
            <li>Python</li>
            <li>PostGres</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default pictuar;
