import React, { Component } from "react";
import "./AddPlayer.css";
export default class AddPlayer extends Component {
  state = {
    name: "",
    age: "",
    country: ""
  };

  updateField = event => {
    const fieldValue = event.target.value;
    const fieldName = event.target.name;
    this.setState({
      [fieldName]: fieldValue
    });
  };

  onSubmit = event => {
    event.preventDefault();
    if (!this.state.name) {
      console.log("no value for name!");
      return;
    } else {
      this.props.submitNewPlayer(this.state.name);
    }
  };
  render() {
    return (
      <div className="add-player">
        <form onSubmit={this.onSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.updateField}
            />
          </label>
          <input type="submit" value="Add" />
        </form>
      </div>
    );
  }
}
