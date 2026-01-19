import React from 'react'
import { Outlet,Link } from 'react-router-dom'
import Navbar from '../Components/Navbar'

   let Layout=()=>{
  return (
    <>
      <Navbar/>
      
      <Outlet />
       
    </>
  )
}

export default Layout