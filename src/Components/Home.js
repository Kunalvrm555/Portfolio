import React from 'react';
import Lottie from "lottie-react";
import SpaceBoy from "../LottieFiles/SpaceBoy.json";
import Typed from "./Typed.js";
import Tilt from 'react-parallax-tilt';
import Avatar from '../images/Avatar.png';
import { CiCoffeeCup } from "react-icons/ci";

const Home = () => {
  return (
    <div >
      <div className='HomePage'>

        <div className='HomeText'>
          <h1>Hi There!</h1>
          <h1>I'M <b>KUNAL VERMA</b></h1>
          <Typed />
        </div>

        <Lottie
          className="illustration"
          animationData={SpaceBoy}
          loop={true}
        />

      </div>

      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Brief <b>introduction</b></h1>
          <p>
            I'm Kunal Verma, a final year undergraduate student at IIT Kharagpur, passionate about developing scalable solutions and systems. My expertise spans <b>JavaScript</b> <b>Python</b>, and I am proficient with the <b>MERN</b> stack. I am currently expanding my skill set to include <b>Golang</b> and <b>TypeScript</b>.<br /><br />
            My project work includes creating dynamic web applications and optimizing systems for performance and scalability. I've also gained substantial experience with <b>Docker</b>, <b>PostgreSQL</b>, and <b>Redis</b>, enhancing my capabilities in backend development and infrastructure management.<br /><br />
            Outside of programming, I find that a good cup of coffee enhances my focus and creativity during coding sessions. <CiCoffeeCup style={{ scale: "1.5", rotate: "15deg" }} />
          </p>

        </div>
        <Tilt>
          <img className='Avatar' src={Avatar} alt="" />
        </Tilt>
      </div>
    </div>
  )
}

export default Home