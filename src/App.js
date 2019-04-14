import React, { Component } from "react";
import audiofile from "./audio/crabrave.ogg";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "vOv",
      color: { color: "#FF000" },
      colorNow: "#FF0000",
      colorPrev: "FF0000",
      clickText: "CLICK THE CRAB!"
    };
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  randomHex() {
    return Math.floor(Math.random() * Math.floor(255)).toString(16);
  }

  handleOnClick() {
    const promise = document.querySelector("audio");
    promise.muted = !promise.muted;
    this.setState({ clickText: "" });
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
        <p className="click">{this.state.clickText}</p>
        <audio src={audiofile} muted autoPlay loop />
        <a className="crab" onClick={this.handleOnClick}>
          {this.state.text}
        </a>
      </div>
    );
  }
}
