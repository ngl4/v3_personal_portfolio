import React, { Component } from "react";
import "./PortfolioCard.css";
import Breakpoint, { BreakpointProvider } from "react-socks";

class PortfolioCard extends Component {
  render() {
    return (
      <div className="card bg-dark text-white projects">
        <BreakpointProvider>
          <img
            className="card-img"
            src={this.props.src}
            alt={this.props.name}
          />
          <Breakpoint medium only>
          <div className="card-img-overlay showDescription">
            <h5 className="card-title">{this.props.name}</h5>
            <p className="card-text">
              {this.props.deploylink ? (
                <span className="text-secondary bg-secondary mr-2">
                  <span
                    onClick={this.props.deploylink}
                    className="bg-muted text-white"
                  >
                    <i
                      className="fas fa-columns fa-3x"
                      style={{ color: "#000000" }}
                    />
                  </span>
                </span>
              ) : (
                ""
              )}
              <span className="text-center">
                <span onClick={this.props.githublink}>
                  <i
                    className="fab fa-github-square fa-3x"
                    style={{ color: "#000000" }}
                  />
                </span>
              </span>
            </p>
          </div>
          </Breakpoint>

          <Breakpoint small down>
          <div className="card-img-overlay showDescription">
            <h5 className="card-title">{this.props.name}</h5>
            <p className="card-text">
              {this.props.deploylink ? (
                <span className="text-secondary bg-secondary mr-2">
                  <span
                    onClick={this.props.deploylink}
                    className="bg-muted text-white"
                  >
                    <i
                      className="fas fa-columns fa-5x"
                      style={{ color: "#000000" }}
                    />
                  </span>
                </span>
              ) : (
                ""
              )}
              <span className="text-center">
                <span onClick={this.props.githublink}>
                  <i
                    className="fab fa-github-square fa-5x"
                    style={{ color: "#000000" }}
                  />
                </span>
              </span>
            </p>
          </div>
          </Breakpoint>

          <Breakpoint large up>
          <div className="card-img-overlay showDescription">
            <h5 className="card-title">{this.props.name}</h5>
            <p className="card-text">
              {this.props.deploylink ? (
                <span className="text-secondary bg-secondary mr-2">
                  <span
                    onClick={this.props.deploylink}
                    className="bg-muted text-white"
                  >
                    <i
                      className="fas fa-columns fa-5x"
                      style={{ color: "#000000" }}
                    />
                  </span>
                </span>
              ) : (
                ""
              )}
              <span className="text-center">
                <span onClick={this.props.githublink}>
                  <i
                    className="fab fa-github-square fa-5x"
                    style={{ color: "#000000" }}
                  />
                </span>
              </span>
            </p>
          </div>
          </Breakpoint>
        </BreakpointProvider>
      </div>
    );
  }
}

export default PortfolioCard;
