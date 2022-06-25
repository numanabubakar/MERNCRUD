import React from 'react'
import { Link } from "react-router-dom";
import { FaUsers,FaLaptopCode,FaHome } from 'react-icons/fa';
import { TiUserAdd  } from 'react-icons/ti';

import "./Header.css"
const NavBar = () => {
  return (
    <div >
<nav className="navbar navbar-expand-lg navbar-dark   bgColor">
  <div className="container">
    <Link to='/' className="navbar-brand textColor fw-bold fs-4"> <FaLaptopCode /> M E R N CRUD  </Link> 
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarScroll">
      <ul className="navbar-nav ms-auto px-4  gap-lg-3 gap-1 my-lg-0 navbar-nav-scroll"   >
        <li className='nav-item'> 
          <Link to='/' className="nav-link  textColor fw-light ">Home <FaHome className='fs-5' /> </Link>        
        
        </li>
        <li className='nav-item'>
          <Link to='/members' className="nav-link textColor  fw-light">Members <FaUsers className='fs-4' /> </Link>        
           </li>
        <li className='nav-item'> 
        
          <Link to='/signup' className="nav-link textColor fw-light">Sign Up<TiUserAdd className='fs-4' /></Link>        
        </li>
      </ul>
      <div className=" navbar-nav">  
          <button className='btn contactBtn '><span  className='contactBtn text-decoration-none' onClick={() => window.location = 'mailto:numanabubakar99@gmail.com'}> Contact US </span> </button>       
      </div>
    </div>
  </div>
</nav>

    </div>
  )
}

export default NavBar