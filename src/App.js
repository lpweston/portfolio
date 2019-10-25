import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import { Router } from "@reach/router";
import Pictuar from "./components/pictuar";
import NCNews from "./components/NCNews";
import Inhuman from "./components/Inhuman";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Main path="/" />
        <Pictuar path="/pictuar-puzzle" />
        <NCNews path="/nc-news" />
        <Inhuman path="/game" />
      </Router>
    </div>
  );
}

export default App;
