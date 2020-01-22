import React, { Component } from "react";
import Player from "./Player";
import "./Scoreboard.css";

export default class Scoreboard extends Component {
  state = {
    players: [
      { id: 1, name: "Kelley", score: 11 },
      { id: 2, name: "David", score: 14 },
      { id: 3, name: "Rein", score: 4 }
    ]
  };
  render() {
    return (
      <div className="scoreboard">
        <h1>Scoreboard</h1>
        <ul>
          {this.state.players.map(player => (
            <Player name={player.name} score={player.score} key={player.id} />
          ))}
        </ul>
      </div>
    );
  }
}
