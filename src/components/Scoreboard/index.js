import React, { Component } from "react";
import "./Scoreboard.css";
import Scoreboard from "./Scoreboard";

class ScoreboardContainer extends Component {
  state = {
    players: [
      { id: 1, name: "Kelley", score: 11 },
      { id: 2, name: "David", score: 14 },
      { id: 3, name: "Rein", score: 4 }
    ]
  };

  increaseScore = id => {
    const playerList = this.state.players;
    const updatePlayers = playerList.map(p =>
      p.id === id ? { ...p, score: p.score + 1 } : p
    );
    this.setState({ players: updatePlayers });
  };

  submitNewPlayer = name => {
    console.log("Player being added!", name);
    const newPlayer = {
      id: Math.trunc(Math.random() * 10000),
      name,
      score: 0
    };
    this.setState({
      players: [...this.state.players, newPlayer]
    });
  };
  render() {
    return (
      <Scoreboard
        increaseScore={this.increaseScore}
        submitNewPlayer={this.submitNewPlayer}
        players={this.state.players}
      />
    );
  }
}

export default ScoreboardContainer;
