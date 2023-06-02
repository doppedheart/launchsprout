import React from 'react'
import '../styles/work.css'
import Img1 from '../assets/work1.svg'
import Img3 from '../assets/work2.svg'
import Img2 from '../assets/work3.svg'

const Work = () => {
  return (
    <div className='work'>
      <h2>Some of our work</h2>
      <p>We would like to showcase some of our works <br /> done together as a team and also done individually.</p>
      <div className="work-cont">
        <div className="inner-cont">
          <img src={Img1} alt="work1" />
          <img src={Img2} alt="work2" />
        </div>
        <img src={Img3} alt="work3" />
      </div>

    </div>

  )
}

export default Work