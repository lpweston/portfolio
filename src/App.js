import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import { Router } from "@reach/router";
import Pictuar from "./components/pictuar";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Main path="/" />
        <Pictuar path="/pictuar-puzzle" />
      </Router>
    </div>
  );
}

export default App;
