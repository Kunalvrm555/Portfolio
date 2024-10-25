import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import Coder from '../LottieFiles/coder.json';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
          <p>
            Hi, my name is <b>Kunal Verma</b> and I am from New Delhi, India.
            I'm a <b> developer</b> and a final year student at <b>IIT Kharagpur</b>. <br /><br />
            I am <b>open</b> to new collaborations or work where I can contribute and grow. Feel free to connect with me, links are in the footer.<br />
            I am a <b>quick learner</b> and I am always ready to learn new technologies and tools. I am <b>passionate</b> about scalability, systems and platforms and I am always looking for new opportunities to learn and grow.
          </p>
        </div>

        <div>
          <Tilt>
            <Lottie
              className="illustration"
              animationData={Coder}
              loop={true}
            />
          </Tilt>
        </div>

      </div>

      <h1 className='SkillsHeading'>Professional Skillset</h1>
      <div className='skills'>

        <Skills skill='React' />
        <Skills skill='Node' />
        <Skills skill='Express' />
        <Skills skill='MongoDB' />
        <Skills skill='Git' />
        <Skills skill='GitHub' />
        <Skills skill='JavaScript' />
        <Skills skill='C++' />
        <Skills skill='Postman' />
        <Skills skill='Figma' />
        <Skills skill='Npm' />
        <Skills skill='Bootstrap' />
        <Skills skill='Docker' />
        <Skills skill='PostgreSQL' />
        <Skills skill='Redis' />
        <Skills skill='TypeScript' />
        <Skills skill='Grafana' />
        <Skills skill='Golang' />

      </div>
    </>
  )
}

export default About