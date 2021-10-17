import React, { Component } from "react";
import "./ColorBox.css";

class ColorBox extends Component {
  render() {
    return (
      <div
        className="ColorBox"
        style={{ backgroundColor: this.props.color }}
        onClick={this.props.changeColor}
      >
        {this.props.color === "#ecf0f1" ? (
          <div className="ColorText text-dark">{this.props.color}</div>
        ) : (
          <div className="ColorText">{this.props.color}</div>
        )}
      </div>
    );
  }
}

export default ColorBox;
