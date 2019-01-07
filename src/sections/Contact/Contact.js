import React, { Component } from "react";
import "./Contact.css";

class Contact extends Component {

  render() {
    return (
      <div className="container text-center">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <h2 className="contact-margin">So... Let's Connect?</h2>
        <div className="text-center">
          <span onClick={this.props.githublink}>
            <i
              class="fab fa-github-square fa-5x mr-5"
              style={{ color: "#000000" }}
            />
          </span>
          <span onClick={this.props.linkedinlink}>
            <i
              class="fab fa-linkedin-in fa-5x mr-5"
              style={{ color: "#000000" }}
            />
          </span>

          <span>
            <a href="mailto:cindybinh444@gmail.com">
            <i class="fas fa-envelope fa-5x" style={{ color: "#000000" }} />
            </a>
          </span>


        </div>
      </div>
    );
  }
}

export default Contact;
