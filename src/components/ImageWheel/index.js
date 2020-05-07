import React from "react";
import "./style.css";
import { Zoom } from 'react-slideshow-image';




function ImageWheel() {

  const images = 
  [
    'https://media.giphy.com/media/dBqrkkKHnc8q1j3bUq/giphy.gif',
    'https://media.giphy.com/media/LRUZfkxSK03y9bOUic/giphy.gif'
  ]
  
   
  const zoomOutProperties = {
    duration: 14000,
    transitionDuration: 300,
    infinite: true,
    indicators: false,
    scale: 0.4,
    arrows: false
  }
   
      return (
        <div className="wrapper">
        <h3>Here's a bit about me...</h3>
        <div className="row">
        <div className="slide-container">
          <Zoom {...zoomOutProperties}>
            {
              images.map((each, index) => <img key={index} src={each} />)
            }
          </Zoom>
        </div>
        <div className="col-sm-6">
            
            <p>
            <b>So you ask, why is it that I love being a developer?.. </b> Great question, thanks for asking. I love being a developer because it ignites the creativity within me. 
            It empowers me to resolve real world problems. It challenges me and my native thought process. It equips me to advance as technology and society does so.
            The mere thought of communicating with a computer or machine is still mind blowing to me. Lastly, the fact that I can help encourage the next developer
            that may not come in the same package or with the same background as majority, is priceless. 
            <br/> 
            <br/>
            <b>Guess that was interesting, tell me more about yourself. </b> Certainly. In my adult life, I've lived in Mississippi, Georgia, North Dakota,
            Texas, and now Washington. Surely I'm astonished with people that know where they want to live without living everywhere <span role="img">&#128513;</span> 
             <br/>
             <br/>
            I'm a basketball junkie. Organized basketball was a major part of my life. I was on a basketball team from age 8 all the way through college. 
            This ultimately resulted in me switching from Computer Science to Information Technology, due to how demanding collegiate athletics can be. 
            Luckily, my developer journey didn't end there. <span role="img">&#127936;</span>
            <br />
            <br />            
            I love the play Hamilton <span role="img">&#128147;</span>. I've seen it three times, twice in London and once in San Francisco. I'm planning to see it at least 5 more times. 
            <br/>
            <br/>
            </p>
            <p id="mycontactstuff">
              <a id="github" href="https://github.com/eturnersumi">Visit my GitHub! </a><a id="linked" href="https://www.linkedin.com/in/erica-turner-sumiyoshi-897bab64">Visit my LinkedIn Profile!</a>
            </p>
        </div>
        </div>
        </div>
      )
  
  }


export default ImageWheel;