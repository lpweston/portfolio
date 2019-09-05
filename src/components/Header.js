import React from "react";

function Header() {
  return (
    <header>
      <img
        id="photo"
        src="./images/laura_weston.jpg"
        alt="Laura Weston Headshot"
      />
      <div class="title">
        <div class="title-item">
          <h1>Laura Weston</h1>
          <h4>Junior Scientific Software Developer</h4>
        </div>
        <div class="title-item">
          <nav>
            <a href="https://twitter.com/Mivena" target="_blank">
              <img id="twitter" src="images/twitter.png" alt="twitter" />
            </a>

            <a href="https://www.linkedin.com/in/lwestonuk/" target="_blank">
              <img id="linkedin" src="images/linkedin.png" alt="linkedin" />
            </a>
            <a href="https://github.com/lpweston" target="_blank">
              <img id="github" src="images/GitHub.png" alt="GitHub" />
            </a>
            <a href="#contact">
              <img id="contact" src="images/email.png" alt="contact" />
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
