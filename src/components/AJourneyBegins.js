import React from "react";
import Unity, { UnityContent } from "react-unity-webgl";

const unityContent = new UnityContent(
  "unity/AJourneyBegins.json",
  "unity/UnityLoader.js"
);

export const AJourneyBegins = ()=> {
  return (
    <div className="Main">
      <div className="box" id="unity-info">
      <img
            src={require("../images/journey.png")}
            alt="Unity Game"
            width="90%"
          />
        <p>
          A Journey Begins is a text based exploration game. Choose your route, choose how to approach obstacles on your journey. Your ending text reflects on the choices you made along the way.
        </p>
        <h3>Links</h3>
          <ul>
            <li>
              <a
                href="https://play.unity.com/mg/other/test-1-th"
                target="_blank"
                rel="noopener noreferrer"
              >
                Game Hosted on Unity Play
              </a>
            </li>
          </ul>
          <h3>Tech Stack</h3>
          <ul>
            <li>Unity</li>
            <li>C#</li>
          </ul>
      </div>
      <div className="box" id="unity-game">
        <Unity unityContent={unityContent} height="700px" width="1000px"/>
      </div>
    </div>
  );
}

export default AJourneyBegins;