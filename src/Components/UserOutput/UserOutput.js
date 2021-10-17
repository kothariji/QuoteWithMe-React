import React from "react";
import "./UserOutput.css";

const UserOutput = (props) => {
  return (
    <div id="my-node">
      <div className="UserOuputWindow">
        <p
          className="WindowText"
          style={{
            backgroundColor: props.backgroundColor,
            color: props.textColor,
          }}
        >
          {props.text}
          {props.showAuthor && <h6>{props.authorText}</h6> }
        </p>
      </div>
    </div>
  );
};

export default UserOutput;
