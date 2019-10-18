import React, { Component } from "react";

class NCNews extends Component {
  render() {
    return (
      <div className="Main">
        <div className="box" id="nc-info">
          <img
            src={require("../images/nc_news.png")}
            alt="NC News"
            width="200px"
          />
          <p>
            NorthCoders News is a discussion board. This was a solo project made
            during the Northcoders bootcamp. I was given a list of user stories
            to satisfy on the front end, and the back end is a RESTful API, made
            with full test driven development.
          </p>
        </div>
        <div className="box" id="nc-lists">
          <h3>Links</h3>
          <ul>
            <li>
              <a
                href="https://news-nc.netlify.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Hosted Website
              </a>
            </li>
            <li>
              <a
                href="https://github.com/lpweston/nc-news"
                target="_blank"
                rel="noopener noreferrer"
              >
                Front End Github
              </a>
            </li>
            <li>
              <a
                href="https://github.com/lpweston/nc-news-BE"
                target="_blank"
                rel="noopener noreferrer"
              >
                Back End Github
              </a>
            </li>
            <li>
              <a
                href="https://news-northcoders.herokuapp.com/api"
                target="_blank"
                rel="noopener noreferrer"
              >
                Hosted Back End
              </a>
            </li>
          </ul>
          <h3>Tech Stack</h3>
          <ul>
            <li>React.JS</li>
            <li>Javascript</li>
            <li>PostGres</li>
          </ul>
        </div>
        <div className="box" id="nc-img">
          <img
            src={require("../images/ncscreenshot.png")}
            alt="Pictuar Puzzle"
            width="100%"
          />
        </div>
      </div>
    );
  }
}

export default NCNews;
