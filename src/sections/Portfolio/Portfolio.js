import React, { Component } from "react";
import "./Portfolio.css";
import PortfolioCard from "../../components/PortfolioCard";
import BegsListImg from "./images/begslist_app.png";
import RecipeImg from "./images/recipe_app.jpg";
import NewsImg from "./images/news_app.jpg";
import ClickImg from "./images/click_app.jpeg";
import TriviaImg from "./images/trivia_app.jpg";
import LiriImg from "./images/liri_app.jpg";


class Portfolio extends Component {
  state = {};

  openInNewTab(url) {
    const win = window.open(url, "_blank");
    win.focus();
  }

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
        <div class="card-columns">
          <PortfolioCard
            src={BegsListImg}
            name="Beg's List"
            deploylink={() =>
              this.openInNewTab("https://stark-beach-71508.herokuapp.com/")
            }
            githublink={() =>
              this.openInNewTab("https://github.com/Anders-Engman/BegsList")
            }
          />
          <PortfolioCard
            src={RecipeImg}
            name="Recipe Search"
            deploylink={() =>
              this.openInNewTab("https://ngl4.github.io/Recipe_App/")
            }
            githublink={() =>
              this.openInNewTab("https://github.com/ngl4/Recipe_App")
            }
          />
          <PortfolioCard
            src={NewsImg}
            name="NewScrapper"
            deploylink={() =>
              this.openInNewTab(" https://tranquil-plateau-63793.herokuapp.com/")
            }
            githublink={() =>
              this.openInNewTab("https://github.com/ngl4/news_Scapper")
            }
          />
          <PortfolioCard
            src={ClickImg}
            name="Memory Clicking Game"
            // deploylink={() =>
            //   this.openInNewTab("https://ngl4.github.io/Recipe_App/")
            // }
            githublink={() =>
              this.openInNewTab("https://github.com/ngl4/click-Click-game")
            }
          />
          <PortfolioCard
            src={TriviaImg}
            name="Trivia Game"
            deploylink={() =>
              this.openInNewTab("https://ngl4.github.io/TriviaGame2/")
            }
            githublink={() =>
              this.openInNewTab("https://github.com/ngl4/TriviaGame2")
            }
          />
          <PortfolioCard
            src={LiriImg}
            name="Liri Node App"
            // deploylink={() =>
            //   this.openInNewTab("https://ngl4.github.io/Recipe_App/")
            // }
            githublink={() =>
              this.openInNewTab("https://github.com/ngl4/liri-node-app")
            }
          />
        </div>
      </div>
    );
  }
}

export default Portfolio;
