import React from 'react'
import './about.css'
import Pfp from '../../assets/clouds.jpg'

const About = () => {
  return (
    <section id='about'>

          <h5>Get to know me</h5>
          <h2>About</h2>

          <div className="container about__container">
            <div className="about__me">
              <div className="about__me-image"></div>
                <img src={Pfp} alt="AboutPfp" /> 
            </div>

          <p>
            Hello! I am currently pursuing a Computer Engineering Technology Bachelor's Degree at Rochester 
            Institute of Technology. I am seeking an internship for the summer/fall of 2024 to broaden my 
            experience and knowledge in the industry while also gaining skills in hardware and software.
          </p>
          </div>

          <div class="button-container">
            <a href="#contact" className='btn btn-primary'>Contact Me</a>
          </div>

    </section>

  )
}

export default About