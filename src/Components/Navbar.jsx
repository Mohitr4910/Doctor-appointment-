import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'





let Navbar = () => {
  return (
    <>
      <header>
        <nav className='flex justify-between h-14 items-center bg-amber-950  text-white  ' >
          <img src="" alt="LOGO" />
          <ul className='flex gap-3.5'>
            <li><Link to="/home" >Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/booking">Booking</Link></li>
          </ul>

          <div className="flex gap-4 p-3.5">
            <Link to="/myaccount">My Account</Link>

            <Link to="/login">Login</Link>
            <Link to="/Signup">SignUp</Link>

          </div>
        </nav>
      </header>


    </>
  )
}

export default Navbar