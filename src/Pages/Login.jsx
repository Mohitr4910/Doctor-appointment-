import React from 'react'
import '../App.css'
import { use, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import v2 from '../assets/Health-and-Medicine.mp4'
import v5 from '../assets/Video Project 2 1.mp4'

import { motion } from "framer-motion";
import AnimatedContent from '../Components/animatedcontant'
import { useEffect } from "react";




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

    e.preventDefault()
    
    let email = form.email.trim()
    let pass = form.pass.trim()

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
      localStorage.setItem("email", form.email)
      localStorage.setItem("password",form.pass)
    navigate("/home")
  }


  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowForm(true);
    }, 2500); 

    return () => clearTimeout(timer);
  }, []);

  return (

    <>

      <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden font-serif bg-white">

        <video
          autoPlay muted playsInline className="absolute border-none items-center w-full h-full object-contain" > <source src={v5} type="video/mp4" />
        </video>

        <div className="absolute flex justify-center items-center w-full h-full bg-black/20"></div>


        {showForm && (
          <AnimatedContent direction="horizontal" distance={-100}
            duration={2}
            // delay={8}
            ease="power4.out">
            <form
              onSubmit={Submit}
              className="relative right-[140px] top-[-50px] overflow-hidden flex flex-col gap-[30px] w-[500px] h-[600px] backdrop-blur-lg rounded-xl shadow-2xl text-white"
            >

              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-[0.9] "
              >
                <source src={v2} type="video/mp4" />
              </video>


              <div className="absolute inset-0 bg-white/20 z-10"></div>


              <div className='w-[100%] relative top-[80px]'>
                <div className="relative z-20 flex flex-col gap-[30px]">

                  <AnimatedContent distance={-200} duration={2} ease="power4.out">
                    <h1 className='text-center text-black text-[30px] font-bold '>Login</h1>
                  </AnimatedContent>

                  <AnimatedContent distance={-200} duration={3} ease="power4.out">
                    <div className="relative left-[15px] group">
                      <p className="text-red-400 text-sm">{erremail}</p>
                      <label className="block font-thin text-[24px] text-black mb-1">Email</label>
                      <input
                        type="text"
                        name="email"
                        value={form.email}
                        onChange={manageform}
                        placeholder='Enter Email'
                        className="w-[90%] h-[40px] text-[17px] bg-transparent border-b-4 border-black/50 px-1 focus:border-b-2 focus:border-white/50 focus:outline-none focus:ring-0 placeholder:text-blue-900"
                      />
                    </div>
                  </AnimatedContent>

                  <AnimatedContent distance={-200}
                    duration={4}
                    // delay={8}
                    ease="power4.out">

                    <div className="relative left-[15px] group">
                      <p className="text-red-400 text-sm">{errpass}</p>


                      <label className="block font-thin text-[24px] text-black mb-1">Password</label>

                      <input
                        type="password"
                        name="pass"
                        value={form.pass}
                        onChange={manageform}
                        placeholder='Enter Password'
                        className="w-[90%] h-[40px] text-[17px] bg-transparent border-b-4 border-black/50 px-1 focus:border-b-2 focus:border-white/50 focus:outline-none focus:ring-0 placeholder:text-blue-900"

                      />
                    </div>
                  </AnimatedContent>
                  <AnimatedContent distance={200}
                    duration={3}
                    // delay={8}
                    ease="power4.out">

                    <div className="flex flex-col relative top-[40px] items-center gap-6 mt-4">

                      <button
                        type="submit"
                        className="w-[160px] h-[40px] bg-green-400 hover:bg-transparent hover:border border-white hover:text-white transition rounded-lg font-semibold text-black"
                      >
                        Login
                      </button>


                      <p className="text-[16px] text-black font-semibold">
                        Don't  have an account?
                        <Link
                          to="/signup"
                          className="text-white hover:text-blue-700  ml-1 hover:underline"
                        >
                          SignUp
                        </Link>
                      </p>


                    </div>
                  </AnimatedContent>

                </div>
              </div>

              {/* -------------------------- */}

            </form>
          </AnimatedContent>
        )}



      </div>


    </>
  )
}

export default Login