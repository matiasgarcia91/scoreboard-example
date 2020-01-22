import React, { Component } from "react";
import "./Player.css";

export default class Player extends Component {
  render() {
    return (
      <li className="player">
        <p className="name">{this.props.name}</p>
        <p className="score">{this.props.score}</p>
        <button className="plus-button">+</button>
      </li>
    );
  }
}
