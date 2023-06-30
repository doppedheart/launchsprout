import React from 'react'
import heroImg from '../assets/heroimg.svg'
import '../styles/hero.css'
const Hero = () => {
  return (
    <div className='container' id='hero'>
      <div className='heading'>
        <h1>We are a <span className='mini-heading'>service <br />based company</span> Specializing in Website And App Building.</h1>
        <p>We provide UI/UX design search engine optimizaton Legal advice Copywriting Digital Marketing. We are a group of experinced profeesionals giving this solutions at a cheap price.</p>
        <button className='hero-btn'>Get Started Now</button>
      </div>
      <div className='container-img'>
          <img src={heroImg} alt="computer man" />
      </div>
    </div>
  )
}

export default Hero