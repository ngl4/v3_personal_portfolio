import React, { Component } from "react";
import "./About.css";
import bcPhoto from "./images/bcphoto.jpg";
import blurPhoto from "./images/blurPhoto.jpg";
import moreBlurPhoto from "./images/moreBlurPhoto.jpg";
// import MediaQuery from 'react-responsive';
import Breakpoint, { BreakpointProvider } from "react-socks";

class About extends Component {
  openInNewTab(url){
    const win = window.open(url, "_blank");
    win.focus();
  }
  render() {
    return (
      <div className="container">
        <br />
        <br />
        <br />
        <br />
        <br />

        <BreakpointProvider>
          <Breakpoint large up>
            <div className="about-background">
              <div className="row row-size">
                <div className="col-md-1" />
                <div className="col-md-1 pt-5 pl-4">
                  <img
                    src={moreBlurPhoto}
                    alt="myPhoto"
                    className="img-moreBlur"
                  />
                  <img src={blurPhoto} alt="myPhoto" className="img-blur" />
                </div>
                <div className="col-md-3">
                  <img src={bcPhoto} alt="myPhoto" className="img-self" />
                </div>
                <div className="col-md-1" />
                <div className="col-md-4 ml-5">
                  <h2>Hi!</h2>
                  <h6>I am Binh Lam. Also, go by "Cindy"! </h6>
                  <br />
                  <h4>Who am I? </h4>
                  <p>
                    {" "}
                    I am an American, was born in Vietnam, and am ethnically
                    Chinese. I can also speak Mandarin, Cantonese, and
                    Vietnamese.
                  </p>
                  <br />
                  <h4>What I do?</h4>
                  <p>
                    I am a Full Stack Web Developer. I can do both Front-End and
                    Back-End Development.
                  </p>
                  <br />
                  <h4>Why I do?</h4>
                  <p>
                    Because there are countless possibilites within programming.
                    Aren't it fun and frustrated at the same time? Yes, and
                    that's what I like about it!
                  </p>
                  <br />
                  <h4>Any other interests?</h4>
                  <p>
                    Photography, Videography, Watching Movies, Animation, Anime,
                    Reading, and Talking{" "}
                  </p>
                  <br />
                  <h4>Favorite music piece?</h4>
                  <p>"Kiss The Rain" by Yiruma</p>
                  <br />
                  <span className="btn btn-secondary mt-3" onClick={() => this.openInNewTab("./assets/resume.pdf")}>
                    My Resume
                  </span>
                </div>
              </div>
            </div>
          </Breakpoint>

          <Breakpoint medium only>
            <div className="about-background">
              <div className="row row-size-medium">
                <div className="col-md-1 pt-3 pl-4">
                  <img
                    src={moreBlurPhoto}
                    alt="myPhoto"
                    className="img-moreBlur-medium"
                  />
                  <img
                    src={blurPhoto}
                    alt="myPhoto"
                    className="img-blur-medium"
                  />
                </div>
                <div className="col-md-2">
                  <img
                    src={bcPhoto}
                    alt="myPhoto"
                    className="img-self-medium"
                  />
                </div>
                <div className="col-md-3" />
                <div className="col-md-5 ml-5">
                  <h3>Hi!</h3>
                  <p>I am Binh Lam. Also, go by "Cindy"! </p>
                  <h6>
                    <strong>Who am I?</strong>
                  </h6>
                  <p>
                    {" "}
                    I am an American, was born in Vietnam, and am ethnically
                    Chinese. I can also speak Mandarin, Cantonese, and
                    Vietnamese.
                  </p>
                  <br />
                  <h6>
                    <strong>What I do?</strong>
                  </h6>
                  <p>
                    I am a Full Stack Web Developer. I can do both Front-End and
                    Back-End Development.
                  </p>
                  <br />
                  <h6>
                    <strong>Why I do?</strong>
                  </h6>
                  <p>
                    Because there are countless possibilites within programming.
                    Aren't it fun and frustrated at the same time? Yes, and
                    that's what I like about it!
                  </p>
                  <br />
                  <h6>
                    <strong>Any other interests?</strong>
                  </h6>
                  <p>
                    Photography, Videography, Watching Movies, Animation, Anime,
                    Reading, and Talking{" "}
                  </p>
                  <br />
                  <h6>
                    <strong>Favorite music piece?</strong>
                  </h6>
                  <p>"Kiss The Rain" by Yiruma</p>
                </div>
              </div>
            </div>
          </Breakpoint>

          <Breakpoint small down>
            <div className="about-background-small">
              <div className="row">
                <div className="col-sm-7 ml-4">
                  <h3>Hi!</h3>
                  <p>I am Binh Lam. Also, go by "Cindy"! </p>
                  <br />
                  <h6>
                    <strong>Who am I?</strong>
                  </h6>
                  <p>
                    {" "}
                    I am an American, was born in Vietnam, and am ethnically
                    Chinese. I can also speak Mandarin, Cantonese, and
                    Vietnamese.
                  </p>
                  <br />
                  <h6>
                    <strong>What I do?</strong>
                  </h6>
                  <p>
                    I am a Full Stack Web Developer. I can do both Front-End and
                    Back-End Development.
                  </p>
                  <br />
                  <h6>
                    <strong>Why I do?</strong>
                  </h6>
                  <p>
                    Because there are countless possibilites within programming.
                    Aren't it fun and frustrated at the same time? Yes, and
                    that's what I like about it!
                  </p>
                  <br />
                  <h6>
                    <strong>Any other interests?</strong>
                  </h6>
                  <p>
                    Photography, Videography, Watching Movies, Animation, Anime,
                    Reading, and Talking{" "}
                  </p>
                  <br />
                  <h6>
                    <strong>Favorite music piece?</strong>
                  </h6>
                  <p>"Kiss The Rain" by Yiruma</p>
                  <br />
                  <span className="btn btn-secondary mt-3" onClick={() => this.openInNewTab("./assets/Cindy_Lam_Resume_06_19.pdf")}>
                    My Resume
                  </span>
                </div>
              </div>
            </div>
          </Breakpoint>
        </BreakpointProvider>
      </div>
    );
  }
}

export default About;
