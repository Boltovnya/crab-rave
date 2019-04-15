import React, { Component } from "react";
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

  componentDidMount() {
    setInterval(() => {
      if (this.state.text === "vOv") {
        this.setState({ text: "VoV" });
      } else {
        this.setState({ text: "vOv" });
      }
    }, 150);
  }

  handleOnClick() {
    const promise = document.getElementById("crabaudio");
    promise.play();
    this.setState({ clickText: "" });
  }

  render() {
    return (
      <div className="App">
        <a className="info" href="https://github.com/boltovnya/crab-rave">
          Project hosted on Github
        </a>
        <p>{this.state.clickText}</p>
        <audio
          id="crabaudio"
          src="https://drive.google.com/uc?export=view&id=1QRKbQihxhUC76Tmb302PAfkIXXoL0igc"
          loop
          autoPlay
          preload="auto"
        />
        <button className="crab" onClick={this.handleOnClick}>
          {this.state.text}
        </button>
      </div>
    );
  }
}
