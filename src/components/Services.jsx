import React from 'react'
import '../styles/services.css'
import Img1 from '../assets/services1.svg'
import Img2 from '../assets/services2.svg'
import Img3 from '../assets/services3.svg'
import Img4 from '../assets/services4.svg'

const Services = () => {
  return (
    <div className='services' id="services">
        <h1>Our Services</h1>
        <p>We offer the best quality services and at the best price.</p>
      <div className="sub-heading">
        <article>
          <img src={Img3} alt="web" />
          <div>
            <h2>web design and development</h2>
            <p>We will make you a fully working website from design to development</p>
            <button className='view-btn'>view plans</button>
          </div>
        </article>
        <article>
          <h2>SEO(Search Engine Optimization's)</h2>
          <img src={Img1} alt="seo" />
        </article>
        <article>
          <h2>Design Services UI/UX Design</h2>
          <img src={Img2} alt="design" />
        </article>
        <article>
          <div>
            <h2>Mobile App Development</h2>
            <p>We will make you a fully working mobile app from design to development</p>
            <button className='view-btn'>view plans</button>
          </div>
          <img src={Img4} alt="mobile" />
        </article>
      </div>
      <button className='hero-btn'>More</button>
    </div>
  )
}

export default Services