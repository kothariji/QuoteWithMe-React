import React, { Component } from "react";
import "./UserInput.css";

class UserInput extends Component {
  render() {
    return (
      <div className="UserInput align-center">
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text bg-dark text-white">
              Enter Quote
            </span>
          </div>
          <textarea
            className="form-control"
            aria-label="With textarea"
            onChange={this.props.changed}
            value={this.props.text}
            rows="3"
          ></textarea>
        </div>
      </div>

    );
  }
}

export default UserInput;
