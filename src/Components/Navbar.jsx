import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

import logo from "../assets/apothecary-159037_1920.png"




let Navbar = () => {
  return (
    <>
      {/* Top Info Bar */}
      <div className="top-bar">
        <div className="top-left">
          <span>📞 +91 9302770758</span>
          <span>✉ mohitrahangdale67890@gmail.com</span>
        </div>

        <div className="top-right">
          <Link to="/booking" className="appointment-btn">
            BOOK APPOINTMENT
          </Link>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="navbar">
        <div className="logo">
          <span className="logo-icon"><img src={logo} alt="" /></span>
          <span className="logo-text">ClinicHub</span>
        </div>

        <ul className="nav-links">
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/about">ABOUT</Link></li>
          <li><Link to="/doctors">DOCTORS</Link></li>
          <li><Link to="/departments">DEPARTMENTS</Link></li>
          <li><Link to="/contact">CONTACT</Link></li>
        </ul>

        <ul className='nav-links'>
          <li className="signup"><Link to="/signup">SIGNUP</Link></li>
          <li className="login"><Link to="/login">LOGIN</Link></li>
        </ul>
      </nav>


    </>
  )
}

export default Navbar