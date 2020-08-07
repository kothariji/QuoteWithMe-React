import React, { Component } from "react";

class AuthorInput extends Component {
  render() {
    return (
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span
            className="input-group-text bg-dark text-white"
            id="inputGroup-sizing-default"
          >
            Author Name
          </span>
        </div>
        <input
          type="text"
          className="form-control"
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          onChange={this.props.changed}
          value={this.props.text}
        />
      </div>
    );
  }
}

export default AuthorInput;
