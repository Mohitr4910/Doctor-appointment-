import React from 'react'
import '../App.css'
import { use, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import v2 from '../assets/57691-486767244.mp4'
import v3 from '../assets/40781-426939561.mp4'
import v4 from '../assets/217018_medium.mp4'
import v5 from '../assets/112256-693798366.mp4'

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
          autoPlay loop muted playsInline className="absolute items-center w-full h-full object-cover" > <source src={v5} type="video/mp4" />
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
            className="relative overflow-hidden flex flex-col gap-[30px] w-[700px] h-[500px] backdrop-blur-lg border border-black rounded-xl shadow-2xl text-white"
          >

            {/* FORM BACKGROUND VIDEO */}
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute top-0 left-0 w-full h-full object-cover z-0"
            >
              <source src={v2} type="video/mp4" />
            </video>


            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-black/60 z-10"></div>


            <div className='w-[50%] relative top-[80px]'>
              {/* FORM CONTENT */}
              <div className="relative z-20 flex flex-col gap-[30px]">

                <motion.h1
                  initial={{ y: -30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  className="text-2xl font-semibold text-center mt-6"
                >
                  Create Your Account
                </motion.h1>

                <div className="relative left-[15px] group">
                  <p className="text-red-400 text-sm">{erremail}</p>

                  <motion.div
                    initial={{ y: -30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.9, duration: 0.5 }}
                  >
                    <label className="absolute left-1 top-2 text-gray-300 text-[18px] transition-all duration-300 

                             peer-focus:-top-4 peer-focus:text-xs peer-focus:text-cyan-400
                             peer-not-placeholder-shown:-top-4 
                             peer-not-placeholder-shown:text-xs
                           peer-not-placeholder-shown:text-cyan-400"
                    >Email</label>

                    <input
                      type="text"
                      name="email"
                      value={form.email}
                      onChange={manageform}
                      placeholder=''
                      className="w-[90%] h-[40px] bg-transparent border-b-2 border-white/50 px-1 focus:border-cyan-400  outline-none"
                    />
                  </motion.div>
                </div>

                <div className="relative left-[15px] group">
                  <p className="text-red-400 text-sm">{errpass}</p>

                  <motion.div
                    initial={{ y: -30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.5 }}
                  >
                    <label className="absolute left-1 top-2 text-gray-300 text-[18px] transition-all 
                             group-focus-within:-top-4 
                             group-focus-within:text-[14px] 
                             group-focus-within:text-cyan-400">Password</label>

                    <input
                      type="password"
                      name="pass"
                      value={form.pass}
                      onChange={manageform}
                      className="w-[90%] h-[40px] bg-transparent border-b-2 border-white/50 px-1 focus:border-cyan-400  outline-none placeholder:text-white"

                    />
                  </motion.div>
                </div>

                <div className="flex flex-col relative top-[40px] items-center gap-6 mt-4">

                  <motion.div
                    initial={{ y: -30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.6, duration: 0.5 }}
                  >
                    <button
                      type="submit"
                      className="w-[160px] h-[40px] bg-neutral-950 hover:bg-transparent hover:border transition rounded-lg font-semibold"
                    >
                      Sign Up
                    </button>
                  </motion.div>

                  <motion.div
                    initial={{ y: -30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.9, duration: 0.5 }}
                  >
                    <p className="text-[16px] font-semibold">
                      Already have account?
                      <Link
                        to="/signup"
                        className="text-blue-400 ml-1 hover:underline"
                      >
                        Login
                      </Link>
                    </p>
                  </motion.div>

                </div>

              </div>
            </div>

            {/* -------------------------- */}

          </form>



        </motion.div>
      </div>


    </>
  )
}

export default Login