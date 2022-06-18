import React from 'react'
import { Link } from "react-router-dom";
import "./Header.css"
const NavBar = () => {
  return (
    <div>
<nav className="navbar navbar-expand-sm navbar-dark  bgColor">
  <div className="container">
    <Link to='/' className="navbar-brand textColor fw-bold fs-4"> M E R N CRUD  </Link> 
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
      <div className="navbar-nav ms-auto  gap-lg-3 gap-1">
          <Link to='/' className="nav-link active textColor">Home </Link>        
          <Link to='/members' className="nav-link textColor ">Members</Link>        
          <Link to='/signup' className="nav-link textColor">Sign Up</Link>        
      </div>
    </div>
  </div>
</nav>

    </div>
  )
}

export default NavBar