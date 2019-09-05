import React from "react";

function Projects() {
  return (
    <div className="box">
      <h2>Projects</h2>
      <div id="box_container">
        <div class="bubble">
          <a href="https://github.com/lpweston/nc-news" target="_blank">
            <img id="news-logo" src="images/news.png" alt="Northcoders News" />
          </a>
        </div>
        <div class="bubble">
          <a href="" target="_blank">
            NC-Project
          </a>
        </div>
        <div class="bubble">
          <a href="https://github.com/lpweston/game" target="_blank">
            A Game
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
