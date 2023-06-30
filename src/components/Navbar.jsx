import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo-lauchsprout.png'
import {FaBars} from 'react-icons/fa'
import { useServicesContext } from '../context/services'
import '../styles/navbar.css'
const Navbar = () => {
    const {openSidebar} =useServicesContext();
  return (
    <div className='navbar' >
        <div className='nav-center'>
            <Link to='/'>
                <img src={logo} className="logo" alt='launchsprout' />
                <h3>LaunchSprout</h3>
            </Link>
            <button className='nav-toggle' onClick={openSidebar}>
                <FaBars/>
            </button>
        </div>
        <ul className='nav-links'>
            <li className='nav-lists'><a href="#hero">Home</a></li>
            <li className='nav-lists'><a href="#team">About Us</a></li>
            <li className='nav-lists'><a href="#services">Services</a></li>
            <li className='nav-lists'><a href="#features">Support</a></li>
        </ul>
        <button className='nav-btn'>SignUp</button>
    </div>
  )
}



export default Navbar