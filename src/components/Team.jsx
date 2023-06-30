import React from 'react'
import Img2 from '../assets/ashutosh.png'
import Img1 from '../assets/devdeep.jpg'
import Img3 from '../assets/rubai.jpg'
import Img4 from '../assets/anurag1.jpg'
import '../styles/team.css'
const Team = () => {
  return (
    <div className='team' id="team">
      <h1>Our Team</h1>
      <p>Meet our team of developers and designer.</p>
      <div className='team-members'>
        <div>
          <img src={Img1} className='team-img' alt="debdeep ghoshal" />
          <h4>Debdeep Ghosal</h4>
          <p>Backend developer</p>
        </div>
        <div>
          <img src={Img2} className='team-img' alt="ashutosh jha" />
          <h4>Ashutosh Jha</h4>
          <p>Mobile App Developer</p>
        </div>
        <div>
          <img src={Img3} className='team-img' alt="swarnava sil" />
          <h4>Swarnava Sil</h4>
          <p>UI/UX Designer</p>
        </div>
        <div>
          <img src={Img4} className='team-img' alt="anurag agarwal" />
          <h4>Anurag Agarwal</h4>
          <p>Frontend Developer</p>
        </div>
      </div>

    </div>
  )
}

export default Team