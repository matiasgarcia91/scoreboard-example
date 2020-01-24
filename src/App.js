import React from "react";
import Scoreboard from "./components/Scoreboard";
import WelcomePage from "./components/WelcomePage";
import { Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Route path="/" exact component={WelcomePage} />
        <Route path="/board" exact component={Scoreboard} />
      </header>
    </div>
  );
}

export default App;
