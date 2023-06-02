import React from 'react'
import Img1 from '../assets/Faq1.svg'
import Img2 from '../assets/Faq2.svg'
import '../styles/faq.css'
const Faq = () => {
  return (
    <div className="faq">
      <div className="img-container">
        <div className="semi-circle"></div>
        <img src={Img1} alt="container photo 1" />
        <img src={Img2} alt="container photo 2" />
        <div className="semi-circle"></div>
      </div>
      <div className="info">
        <h3>Why choose us?</h3>
        <h2>We understand your needs and tailor our product based on that.</h2>
        <p>Each member of our team is higly dedicated in making the bet product for you and your customers. we take extra careb in making it Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat eligendi, aut a quae quod exercitationem enim. Minus, placeat reprehenderit. Dolorum?</p>
      </div>
    </div>
  )
}

export default Faq