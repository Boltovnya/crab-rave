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
    setInterval(() => {
      this.setState({
        colorPrev: this.state.color,
        color: { color: `#${this.randomHex()}0000` },
        colorNow: this.state.color
      });
    }, 100);
  }

  render() {
    return (
      <div className="App">
        <a className="info" href="https://github.com/boltovnya/crab-rave">
          Project hosted on Github
        </a>
        <p className="crab">{this.state.text}</p>
      </div>
    );
  }
}
