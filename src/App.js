import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import { Router } from "@reach/router";
import Pictuar from "./components/pictuar";
import NCNews from "./components/NCNews";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Main path="/" />
        <Pictuar path="/pictuar-puzzle" />
        <NCNews path="/nc-news" />
      </Router>
    </div>
  );
}

export default App;
