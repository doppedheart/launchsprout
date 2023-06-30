import React from 'react'
import Img1 from '../assets/feature1.svg'
import Img2 from '../assets/feature2.svg'
import Img3 from '../assets/feature3.svg'
import '../styles/features.css'
const Feature = () => {
  return (
    <div className='feature' id='features'>
      <article className='container-feature'> 
        <div>
          <h4>24*7 Hour Support</h4>
          <p>We provide 24 hours service everyday of the week.</p>
        </div>
        <img src={Img1} alt="icon" />
      </article>
      <article>
        <div>
          <h4>Affordable Costing</h4>
          <p>We provide Industry standard solution but at a fraction of a price.</p>
        </div>
        <img src={Img2} alt="icon" />
      </article>
      <article>
        <div>
          <h4>High Quality Output</h4>
          <p>We provide the best quality product and output.</p>
        </div>
        <img src={Img3}alt="icon" />

      </article>
    </div>
  )
}

export default Feature