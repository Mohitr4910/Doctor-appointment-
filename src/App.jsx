import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes,Route } from 'react-router-dom'
import Layout from './Pages/Layout'
import Home from './Pages/Home'
import About from './Pages/About'
import Booking from './Pages/Booking'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Doctors from './Pages/Doctors'
import Departments from './Pages/Departments'


  let App=()=> {

  return (
    <>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="home" element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="booking" element={<Booking/>}/>
      <Route path="doctors" element={<Doctors/>}/>
      <Route path="departments" element={<Departments/>}/>
      </Route>

      <Route path="login" element={<Login/>}/>
      <Route path="Signup" element={<Signup/>}/>



    </Routes>

      
    </>
  )
}

export default App


