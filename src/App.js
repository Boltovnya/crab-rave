import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "vOv",
      color: { color: "#FF000" },
      colorNow: "#FF0000",
      colorPrev: "FF0000"
    };
  }

  randomHex() {
    return Math.floor(Math.random() * Math.floor(255)).toString(16);
  }

  componentDidMount() {
    setInterval(() => {
      if (this.state.text === "vOv") {
        this.setState({ text: "VoV" });
      } else {
        this.setState({ text: "vOv" });
      }
    }, 150);
  }

  render() {
    return (
      <div className="App">
        <a className="info" href="https://github.com/boltovnya/crab-rave">
          Project hosted on Github
        </a>
        <p>CLICK THE CRAB</p>
        <a className="crab" href="" onClick={this.handleOnClick}>
          {this.state.text}
        </a>
      </div>
    );
  }
}
