import React from 'react'
import '../App.css'
import { use, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import v2 from '../assets/57691-486767244.mp4'

import { motion } from "framer-motion";





let Login = () => {
  let navigate = useNavigate()

  let [form, setform] = useState({

    email: '',
    pass: ''
  })

  let manageform = (e) => {

    setform({ ...form, [e.target.name]: e.target.value })

  }

  let [erremail, seterror] = useState('')
  let [errpass, setepass] = useState('')




  let Submit = (e) => {

    let email = form.email.trim()
    let pass = form.pass.trim()

    e.preventDefault()
    console.log(form)
    let valid = true

    if (email == "") {

      e.preventDefault()
      valid = false
       seterror('Email required')

    }
    else if (!(email.includes("@") && email.includes(".com"))) {

      e.preventDefault()
      valid = false

      seterror('Enter valid email')

    }
    else if (pass == "") {
      e.preventDefault()
      valid = false

      setepass('Password required')
    }
    else if (!(pass.match(/[!@#$&*]/) && pass.match(/[a-z]/) && pass.match(/[1234567890]/))) {
      e.preventDefault()
      valid = false

      setepass('Enter Strong password use( 0-9,a-z,!@#$&* )')
    }

    let users = JSON.parse(localStorage.getItem('users')) || []

    let existuser = users.find((e) => {
      return e.email == form.email
    })

    if (!existuser) {
      alert('Please register first')

      navigate("/signup")

    }

    if (pass != existuser.pass) {
      alert("password invalid")
      return
    }

    alert("Login successful")
    navigate("/home")




  }


  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };

  return (

    <>

      <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden font-serif">



        <video 
           autoPlay loop muted playsInline className="absolute items-center w-full h-full object-cover" > <source src={v2} type="video/mp4" />
        </video>






        {/* Overlay (optional dark layer) */}
        <div className="absolute flex justify-center items-center w-full h-full bg-black/40"></div>

        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-black/30 p-6 rounded-xl w-[400px] rounded-xl"
        >

          <form
            onSubmit={Submit}
            className="relative flex flex-col gap-[30px] w-[420px] h-[500px] backdrop-blur-lg bg-black/ border border-black rounded-xl shadow-2xs space-y-4 text-white"
          >
            <h1 className="text-2xl  font-semibold text-center relative top-[30px]">
              <motion.h1 initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3, duration: 0.5 }} className="text-2xl text-white text-center mb-4">

                Create Your Account
              </motion.h1>
            </h1>



            <div className='relative  top-8 left-[15px]' >
              <p className="text-red-950 text-sm">{erremail}</p>
              <motion.h1 initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5, duration: 0.5 }}>
                <label className="block font-thin text-[20px] text-black-200 mb-1">Email</label>
                <input
                  type="text"
                  name="email"
                  value={form.email}
                  onChange={manageform}
                  placeholder="Email Address"
                  className="w-[90%] h-[40px] bg-white/10 rounded-md px-4 py-2 outline-none placeholder:text-white"
                />
              </motion.h1>
            </div>

            <div className='relative  top-8 left-[15px]' >
              <p className="text-red-950 text-sm">{errpass}</p>
              <motion.h1 initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.7, duration: 0.5 }}>

                <label className="block font-thin text-[20px] text-black-200 mb-1">Password</label>
                <input type="password" name="pass" value={form.pass} onChange={manageform} placeholder="Password"
                  className="w-[90%] h-[40px] bg-white/10 rounded-md px-4 py-2 outline-none placeholder:text-white" />

              </motion.h1>
            </div>

            <div className=" flex  flex-col justify-center items-center gap-[30px] pt-2 relative top-[40px]">
             <motion.h1 initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.9, duration: 0.5 }} className='w-[60%] text-center'>
           
              <button type="submit" className="w-[50%] h-[40px]  bg-neutral-950 hover:bg-transparent hover:border-2 transition py-2 rounded-lg font-semibold">
                Sign Up
              </button>
               </motion.h1>
             <motion.h1 initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1, duration: 0.5 }} >
              <p className="text-[18px] font-bold text-black">
                Don't have an account?
                <Link
                  to="/signup"
                  className="  text-blue-900 text-[16px] ml-1 hover:underline"
                >
                  SignUp
                </Link>
              </p>
               </motion.h1>

            </div>
          </form>


        </motion.div>
      </div>


    </>
  )
}

export default Login