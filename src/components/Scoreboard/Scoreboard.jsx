import React, { Component } from "react";
import Player from "../Player";
import "./Scoreboard.css";
import AddPlayer from "../AddPlayer";

export default class Scoreboard extends Component {
  render() {
    const sortedArray = [...this.props.players].sort(
      (a, b) => b.score - a.score
    );
    return (
      <div className="scoreboard">
        <h1>Scoreboard</h1>
        <ul>
          {sortedArray.map((player, index) => (
            <Player
              id={player.id}
              name={player.name}
              score={player.score}
              key={index}
              increaseScore={() => this.props.increaseScore(player.id)}
            />
          ))}
        </ul>
        <AddPlayer submitNewPlayer={this.props.submitNewPlayer} />
      </div>
    );
  }
}
