import React from "react";
import "./style.css";


function Form() {


  return (
    <div className="wrapper">
    <div className="row">
    <h3>Contact Me</h3>
    </div>
    <div className="row">
    <form action="mailto:eturner.et3@outlook.com" method="post" encType="text/plain" >
    Name:<br/>
    <input type="text" name="name" /><br/>
    E-mail:<br/>
    <input type="text" name="mail" /><br/>
    Comment:<br/>
    <input type="text" name="comment" size="50" /><br/><br/>
    <input type="submit" value="Send"/>
    <input type="reset" value="Reset"/>
    </form>
    <div className="pic">
    </div>
    </div>
    <br/>
    <br/>
    <div className="row">
    <a id="resume" href={require("./assets/resume.pdf")}>
    View my resume here
    </a>
    </div>
    </div>  
  );
}

export default Form;