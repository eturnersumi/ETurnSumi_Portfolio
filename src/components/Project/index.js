import React from "react";
import "./style.css";


function Project() {
  return(
    <div className="wrapper">
    <h3>Check out some of my work...</h3>
    <div className="row">
    <div className="flip-card">
    <div className="flip-card-inner">
      <div className="flip-card-front">
        <img className="apps" src={require("../../images/whoiswho.PNG")} alt="whoiswho"/>
      </div>
      <div className="flip-card-back">
        <h1>Who Is Who</h1>
        <p>Locate your employees and coworkers in a seamless manner.</p>
        <p className="link">
        <a href="https://powerful-depths-46254.herokuapp.com/">
        Try it out!
        </a>
        </p>
      </div>
    </div>
  </div>
  <div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
      <img className="apps" src={require("../../images/gitmefit.PNG")} alt="gitmefit"/>
    </div>
    <div className="flip-card-back">
      <h1>Git Me Fit!</h1>
      <p>Meet your fitness goals with this workout application. </p>
      <p className="link">
        <a href="https://gentle-falls-95535.herokuapp.com/">
        Try it out!
        </a>
        </p>
    </div>
  </div>
</div>
<div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
      <img className="apps" src={require("../../images/momoney.PNG")} alt="momoney"/>
    </div>
    <div className="flip-card-back">
      <h1>Mo' Money</h1>
      <p>Save up for that big purchase with this budget application.</p>
      <p className="link">
        <a href="https://warm-hollows-78608.herokuapp.com/">
        Try it out!
        </a>
        </p>
    </div>
  </div>
</div>
<div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
      <img className="apps" src={require("../../images/dynasty.PNG")} alt="beatmydynasty"/>
    </div>
    <div className="flip-card-back">
      <h1>Beat My Dynasty</h1>
      <p>Pick NBA dynasties to compete against one another.</p>
      <p className="link">
        <a href="https://fierce-chamber-39639.herokuapp.com/">
        Try it out!
        </a>
        </p>
    </div>
  </div>
</div>
</div>
<div className="row">
<div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
      <img className="apps" src={require("../../images/woof.PNG")} alt="woof"/>
    </div>
    <div className="flip-card-back">
      <h1>WOOF!</h1>
      <p>Set up quality, planned play dates for your pup with this application.</p>
      <p className="link">
        <a href="https://ancient-plateau-65013.herokuapp.com/">
        Try it out!
        </a>
        </p>
    </div>
  </div>
</div>
<div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
      <img className="apps" src={require("../../images/comininhot.PNG")} alt="comininhot"/>
    </div>
    <div className="flip-card-back">
      <h1>Comin' In HOT</h1>
      <p>Never let down your friends, family, and boss again with this navigation application.</p>
      <p className="link">
        <a href="https://eturnersumi.github.io/Comin-In-Hot/">
        Try it out!
        </a>
        </p>
    </div>
  </div>
</div>
<div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
      <img className="apps" src={require("../../images/eatdaburger.PNG")} alt="eatdaburger"/>
    </div>
    <div className="flip-card-back">
      <h1>Eat-Da-Burger</h1>
      <p>On a diet? Fantasize about eating those burgers with this application.</p>
      <p className="link">
        <a href="https://evening-shelf-09181.herokuapp.com/">
        Try it out!
        </a>
        </p>
    </div>
  </div>
</div>
<div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
      <img className="apps" src={require("../../images/weatherdashboard.PNG")} alt="sunlessseattle"/>
    </div>
    <div className="flip-card-back">
      <h1>Sunless Seattle</h1>
      <p>Never ruin your sandals in the rain again. Check the weather with this application.</p>
      <p className="link">
        <a href="https://eturnersumi.github.io/weatherdashboard/dashboard.html">
        Try it out!
        </a>
        </p>
    </div>
  </div>
</div>
</div>
</div>
  )
}

export default Project;