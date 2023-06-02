import React from 'react'
import logo from '../assets/react.svg'
import { FaTimes } from 'react-icons/fa'
import styled from 'styled-components'
import { useServicesContext } from '../context/services'
const Sidebar = () => {
  const {isSidebarOpen ,closeSidebar}=useServicesContext();
 
  return <SidebarContainer>
    <aside className={`${isSidebarOpen?'show-sidebar sidebar':'sidebar'}`}>
      <div className="sidebar-header">
        <img src={logo} alt='comfy' />
        <button className='close-btn' onClick={closeSidebar} ><FaTimes/></button>
      </div>
      <ul className='links'>
        <li><a>about</a></li>
        <li><a>about</a></li>
        <li><a>about</a></li>
        <li><a>about</a></li>
    </ul>
    </aside>
  </SidebarContainer>
}

const SidebarContainer = styled.div`
      --transition: all 0.3s linear;

  text-align: center;
  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
  }
  .close-btn {
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    color: var(--clr-primary-5);
    transition: var(--transition);
    cursor: pointer;
    color: var(--clr-green-dark);
    margin-top: 0.2rem;
  }
  .close-btn:hover {
    color: var(--clr-green-light);
  }
  .logo {
    justify-self: center;
    height: 45px;
  }
  .links {
    list-style-type:none;
    margin-bottom: 2rem;
  }
  .links a {
    display: block;
    text-decoration:none;
    text-align: left;
    font-size: 1rem;
    text-transform: capitalize;
    padding: 1rem 1.5rem;
    color: var(--clr-grey-3);
    transition: var(--transition);
    letter-spacing: var(--spacing);
  }

  .links a:hover {
    padding: 1rem 1.5rem;
    padding-left: 2rem;
    background: var(--clr-grey-10);
    color: var(--clr-grey-2);
  }

  .sidebar {
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: var(--clr-white);
    transition: var(--transition);
    transform: translate(100%);
    z-index: -1;
  }
  .show-sidebar {
    transform: translate(0);
    z-index: 999;
  }
  
  @media screen and (min-width: 992px) {
    .sidebar {
      width:40%;
      height:100%;
    }
  }
`

export default Sidebar
