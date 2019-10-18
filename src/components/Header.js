import React from "react";
import { Link } from "@reach/router";

function Header() {
  return (
    <header>
      <img
        id="photo"
        src={require("../images/laura_weston.jpg")}
        alt="Laura Weston Headshot"
      />
      <div className="title">
        <div className="title-item">
          <h1>
            <Link to="/">Laura Weston</Link>
          </h1>
          <h4>Junior Scientific Software Developer</h4>
        </div>
        <nav className="title-item">
          <a
            href="https://twitter.com/Mivena"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              id="twitter"
              src={require("../images/twitter.png")}
              alt="twitter"
            />
          </a>

          <a
            href="https://www.linkedin.com/in/lwestonuk/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              id="linkedin"
              src={require("../images/linkedin.png")}
              alt="linkedin"
            />
          </a>
          <a
            href="https://github.com/lpweston"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              id="github"
              src={require("../images/GitHub.png")}
              alt="GitHub"
            />
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
