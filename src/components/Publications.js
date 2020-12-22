import React from "react";
import { publications } from "../api/data";

const Publications = () => {
  return (
    <div id="publications" className="box">
      <h2>Publications</h2>
      <ul>
        {publications.map((pub, i) => {
          return (
            <li key={i}>
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
  );
};

export default Publications;
