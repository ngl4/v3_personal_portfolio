import React from "react";
import "./About.css";
import bcPhoto from "./images/bcphoto.jpg";
import blurPhoto from "./images/blurPhoto.jpg";
import moreBlurPhoto from "./images/moreBlurPhoto.jpg";

const About = () => (
  <div className="container">
    <br />
    <br />
    <br />
    <br />
    <br />

    <div className="row row-size">
      <div className="col-md-1" />
      <div className="col-md-1 pt-5 pl-4">
        <img src={moreBlurPhoto} alt="myPhoto" className="img-moreBlur" />
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
        <p> I am an American, was born in Vietnam, and am ethnically Chinese. I can also speak Mandarin, Cantonese, English, and Vietnamese.
        </p>
        <br />
        <h4>What I do?</h4>
        <p>I am a Full Stack Web Developer. I can do both Front-End and Back-End Development.</p>
        <br />
        <h4>Why I do?</h4>
        <p>Because there are countless possibilites within programming. Aren't it fun and frustrated at the same time? Yes, and that's what I like about it!</p>
        <br />
        <h4>Any other interests?</h4>
        <p>Photography, Videography, Watching Movies, Animation, Anime, Reading, and Talking </p>
        <br />
        <h4>Favorite music piece?</h4>
        <p>"Kiss The Rain" by Yiruma</p>
      </div>
    </div>
  </div>
);

export default About;
