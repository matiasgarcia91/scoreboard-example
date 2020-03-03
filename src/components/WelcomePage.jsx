import React, { Component } from "react";
import { Link } from "react-router-dom";

class WelcomePage extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to the Codaisseur Scoreboard!</h1>
        <Link to="/board">
          <h2>To scoreboard!</h2>
        </Link>
      </div>
    );
  }
}

export default WelcomePage;
