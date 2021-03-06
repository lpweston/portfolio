import React from "react";
import Projects from "./Projects";
import Skills from "./Skills";
import ProfSummery from "./ProfSummery";
import Interests from "./Interests";
import Publications from "./Publications";
import Experience from "./Experience";
import Education from "./Education";

class Main extends React.Component {
  render() {
    return (
      <main className="Main">
        <Projects />
        <Skills />
        <ProfSummery />
        <Interests />
        <Publications />
        <Experience />
        <Education />
      </main>
    );
  }
}
export default Main;
