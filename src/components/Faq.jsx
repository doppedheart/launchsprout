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
        <h2><span>Why choose us?</span><br />
        We understand your needs and tailor our product based on that.</h2>
        <p>At LaunchSprout, we firmly believe in understanding your needs and customizing our products to cater to them.
We recognize that every business and individual has distinct requirements and goals. That's why we are dedicated to tailoring our solutions to suit your specific needs, enabling you to achieve your desired outcomes.Our team of professionals is committed to listening attentively, analyzing thoroughly, and collaborating closely with you.</p>
      </div>
    </div>
  )
}

export default Faq