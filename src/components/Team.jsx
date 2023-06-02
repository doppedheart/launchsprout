import React from 'react'
import Img1 from '../assets/team1.svg'
import Img2 from '../assets/team2.svg'
import Img3 from '../assets/team3.svg'
import Img4 from '../assets/team4.svg'
import '../styles/team.css'
const Team = () => {
  return (
    <div className='team'>
      <h1>Our Team</h1>
      <p>Meet our team of developers and designer.</p>
      <div className='team-members'>
        <div>
          <img src={Img1} alt="person1" />
          <h4>Debdeep Ghosal</h4>
          <p>Backend developer</p>
        </div>
        <div>
          <img src={Img2} alt="person2" />
          <h4>Ashutosh Jha</h4>
          <p>Mobile App Developer</p>
        </div>
        <div>
          <img src={Img3} alt="" />
          <h4>Swarnava Sil</h4>
          <p>UI/UX Designer</p>
        </div>
        <div>
          <img src={Img4} alt="" />
          <h4>Anurag Agarwal</h4>
          <p>Frontend Developer</p>
        </div>
      </div>

    </div>
  )
}

export default Team