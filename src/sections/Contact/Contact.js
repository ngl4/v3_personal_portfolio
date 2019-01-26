import React, { Component } from "react";
import "./Contact.css";
import Breakpoint, { BreakpointProvider } from "react-socks";
import { Button, UncontrolledPopover, PopoverHeader, PopoverBody } from "reactstrap";

class Contact extends Component {
  // constructor(props) {
  //   super(props);

  //   this.toggle = this.toggle.bind(this);
  //   this.state = {
  //     popoverOpen: false
  //   };
  // }

  // toggle() {
  //   this.setState({
  //     popoverOpen: !this.state.popoverOpen
  //   });
  // }
  render() {
    return (
      <BreakpointProvider>
        <Breakpoint small down>
          <div className="contact-bg-small">
            <div className="container text-center">
              <br />
              <br />
              <br />
              <br />
              <br />
              <h3 className="contact-margin-small">So... Let's Connect?</h3>
              <div className="d-flex flex-column align-content-center">
                <span onClick={this.props.githublink}>
                  <i
                    className="fab fa-github-square fa-5x mr-2 mb-4"
                    style={{ color: "#000000" }}
                  />
                </span>
                <span onClick={this.props.linkedinlink}>
                  <i
                    className="fab fa-linkedin-in fa-5x mr-2 mb-4"
                    style={{ color: "#000000" }}
                  />
                </span>
                <Button
                  id="PopoverLegacy" type="button"
                  className="mail-button mb-5 mr-2 ml-3"
                >
                  <i
                    className="fas fa-envelope fa-5x"
                    style={{ color: "#000000" }}
                  />
                </Button>
                <UncontrolledPopover
                  trigger="legacy"
                  placement="bottom"
                  target="PopoverLegacy"
                >
                  <PopoverHeader>Email Address</PopoverHeader>
                  <PopoverBody>
                  bcindystory@gmail.com
                  </PopoverBody>
                </UncontrolledPopover>
                {/* <span>
                  <a href="mailto:cindybinh444@gmail.com">
                    <i
                      className="fas fa-envelope fa-5x mr-2"
                      style={{ color: "#000000" }}
                    />
                  </a>
                </span> */}
              </div>
            </div>
          </div>
        </Breakpoint>

        <Breakpoint medium up>
          <div className="contact-bg">
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
                    className="fab fa-github-square fa-5x mr-5 ml-3"
                    style={{ color: "#000000" }}
                  />
                </span>
                <span onClick={this.props.linkedinlink}>
                  <i
                    className="fab fa-linkedin-in fa-5x mr-4"
                    style={{ color: "#000000" }}
                  />
                </span>
                <Button
                  id="PopoverLegacy" type="button"
                  className="mail-button mb-5 mr-2 ml-3"
                >
                  <i
                    className="fas fa-envelope fa-5x"
                    style={{ color: "#000000" }}
                  />
                </Button>
                <UncontrolledPopover
                  trigger="legacy"
                  placement="bottom"
                  target="PopoverLegacy"
                >
                  <PopoverHeader>Email Address</PopoverHeader>
                  <PopoverBody>
                  bcindystory@gmail.com
                  </PopoverBody>
                </UncontrolledPopover>
                {/* <span>
                  <a href="mailto:cindybinh444@gmail.com">
                    <i
                      className="fas fa-envelope fa-5x"
                      style={{ color: "#000000" }}
                    />
                  </a>
                </span> */}
              </div>
            </div>
          </div>
        </Breakpoint>
      </BreakpointProvider>
    );
  }
}

export default Contact;
