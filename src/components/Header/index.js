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
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
      <div className="navbar-nav ms-auto px-4  gap-lg-3 gap-1">
          <Link to='/' className="nav-link  textColor fw-light ">Home <FaHome className='fs-5' /> </Link>        
          <Link to='/members' className="nav-link textColor  fw-light">Members <FaUsers className='fs-4' /> </Link>        
          <Link to='/signup' className="nav-link textColor fw-light">Sign Up<TiUserAdd className='fs-4' /></Link>        
      </div>
      <div className=" navbar-nav">  
          <button className='btn contactBtn '><Link to='/' className='contactBtn text-decoration-none'> Contact US </Link> </button>       
      </div>
    </div>
  </div>
</nav>

    </div>
  )
}

export default NavBar