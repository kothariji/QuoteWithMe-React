import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  state = {};
  render() {
    return (
      <div class="contact text-white" id="contact">
        <div class="container">
          <hr class="conhr" />
          <h2>Thanks For Visiting !</h2>
          <hr class="conhr" />
          <div class="madewithlove name">
            <p>
              Built with React <i class="fa fa-github" aria-hidden="true"></i>
            </p>
            <p>
              Designed with <i class="fa fa-heart pulse"></i> by{" "}
              <a href="https://www.linkedin.com/in/kotharidhruv/">
                <strong className="text-white ">Dhruv Kothari</strong>
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
