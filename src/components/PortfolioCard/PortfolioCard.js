import React, { Component } from "react";
import "./PortfolioCard.css";

class PortfolioCard extends Component {
  render() {
    return (
      <div class="card bg-dark text-white projects">
        <img class="card-img" src={this.props.src} alt={this.props.name} />
        <div class="card-img-overlay showDescription">
          <h5 class="card-title">{this.props.name}</h5>
          <p class="card-text">
          {this.props.deploylink ? <span class="text-secondary bg-secondary mr-2">
              <span
                onClick={this.props.deploylink}
                class="bg-muted text-white" >
                <i class="fas fa-columns fa-5x" style={{color: "#000000" }} />
             </span>
            </span>: ""}
            <span class="text-center">
              <span
                onClick={this.props.githublink}>
                <i class="fab fa-github-square fa-5x" style={{color: "#000000" }} />
            </span>
            </span>
          </p>
        </div>
      </div>
    );
  }
}

export default PortfolioCard;
