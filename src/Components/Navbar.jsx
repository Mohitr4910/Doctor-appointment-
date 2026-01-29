import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { useEffect, useState } from "react";

import logo from "../assets/apothecary-159037_1920.png"




let Navbar = () => {



  const [Login, setLogin] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("email");
          //  console.log(user);
           
  
    if (user) {
      setLogin(true);
    } else {
      setLogin(false);
    }

  }, []);

  let logout = () => {
    const Confirm =window.confirm("Are you sure you want to logout?")
    if(Confirm){

      localStorage.removeItem("email");
      localStorage.removeItem("password");
      setLogin(false);
    }
    else{
      return
    }
  };


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
          <li><Link to="/mybooking">My Bookings</Link></li>
        </ul>

         
        <ul className='nav-links'>
          
          {Login ? (<div>
          {/* <img src="" alt="" /> */}
          <li className='profile'>Profile</li>
          </div>):("")}
          <li className="signup"><Link to="/signup">SignUP</Link></li>

          <div className='left-button'>
          { Login ?(<li className="logout"><button onClick={logout}>LogOut</button> </li>):(<li className="login"><Link to="/login">LogIn</Link></li>)}
          </div>
        </ul>

      </nav>


    </>
  )
}

export default Navbar