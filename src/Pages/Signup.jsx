import React from 'react'
import './Signup.css'
import { use, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

import v2 from '../assets/217018_medium copy.mp4'




let Signup = () => {
    const navigate = useNavigate()


    let [form, setform] = useState({
        name: '',
        email: '',
        contact: '',
        pass: '',
        cpass: '',
    })



    let manageform = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }

    let [errname, seterrname] = useState('')
    let [erremail, seterremail] = useState('')
    let [errnum, seterrnum] = useState('')
    let [errpass, seterrpass] = useState('')
    let [errcpass, seterrcpass] = useState('')


    let Submit = (e) => {
      


        e.preventDefault()

        let name = form.name.trim()
        let contact = form.contact.trim()
        let email = form.email.trim()
        let pass = form.pass.trim()
        let cpass = form.cpass.trim()

        let valid = true

        if (name == "") {

            e.preventDefault()
            valid = false
            seterrname('Name required')

        }

        else if (email == "") {

            e.preventDefault()
            valid = false

            seterremail('Email required')

        }
        else if (!(email.includes("@") && email.includes(".com"))) {

            e.preventDefault()
            valid = false

            seterremail('Enter valid email')

        }

        else if (contact.length != 10) {

            e.preventDefault()
            valid = false

            seterrnum('Enter valid contact')

        }
        else if (isNaN(contact)) {

            e.preventDefault()
            valid = false

            seterrnum('Enter valid contact')


        }
        else if (pass == "") {
            e.preventDefault()
            valid = false

            seterrpass('Password required')
        }
        else if (!(pass.match(/[!@#$&*]/) && pass.match(/[a-z]/) && pass.match(/[1234567890]/))) {
            e.preventDefault()
            valid = false

            seterrpass('Enter Strong password use( 0-9,a-z,!@#$&* )')
        }
        else if (cpass == "") {
            e.preventDefault()
            valid = false

            seterrcpass('Confirm password required')
        }
        else if (!(pass == cpass)) {
            e.preventDefault()
            valid = false

            seterrcpass('Password and confirm not matched')
        }

        if (valid) {

            let users = JSON.parse(localStorage.getItem('users')) || []

            let existuser = users.find((e) => {
                return e.email == form.email
            })

            if (existuser) {
                alert("Alradyn registered")
                return
            }
            users.push(form)
            localStorage.setItem('users', JSON.stringify(users))
            alert("signup successful")
            navigate('/login')
        }

    }



    return (

        <>
    
            <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">

 

            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute items-center w-full h-full object-cover"
            >
                <source src={v2} type="video/mp4" />
            </video>

            {/* Overlay (optional dark layer) */}
            <div className="absolute flex justify-center items-center w-full h-full bg-black/40"></div>



            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >


                <Tilt
                    tiltMaxAngleX={15}
                    tiltMaxAngleY={15}
                    perspective={1000}
                    glareEnable={true}
                    glareMaxOpacity={0.3}
                    scale={1.02}
                >
                    <form
                        onSubmit={Submit}
                        className="relative flex flex-col gap-[30px] w-[700px] h-[650px] backdrop-blur-lg bg-white/5 border border-black rounded-xl shadow-2xs space-y-4 text-black "
                    >
                        <h1 className="text-2xl  font-semibold text-center relative top-[30px]">
                            Create Your Account
                        </h1>

                        <div className='relative top-2.5 left-[15px]' >
                            <p className="text-red-950 text-sm">{errname}</p>
                            <label className="block font-thin text-[20px] text-black-200 mb-1">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={manageform}
                                placeholder="Full Name"
                                className="w-[90%] h-[40px] bg-white/10 border border-black/40 rounded-md px-4 py-2 outline-none placeholder:text-black"
                            />
                        </div>

                        <div className='relative  top-2.5 left-[15px]' >
                            <p className="text-red-950 text-sm">{erremail}</p>
                            <label className="block font-thin text-[20px] text-black-200 mb-1">Email</label>
                            <input
                                type="text"
                                name="email"
                                value={form.email}
                                onChange={manageform}
                                placeholder="Email Address"
                                className="w-[90%] h-[40px] bg-white/10 border border-black/40 rounded-md px-4 py-2 outline-none placeholder:text-black"
                            />
                        </div>

                        <div className='relative  top-2.5 left-[15px]' >
                            <p className="text-red-950 text-sm">{errnum}</p>
                            <label className="block font-thin text-[20px] text-black-200 mb-1">Contact</label>
                            <input
                                type="text"
                                name="contact"
                                value={form.contact}
                                onChange={manageform}
                                placeholder="Contact Number"
                                className="w-[90%] h-[40px] bg-white/10 border border-black/40 rounded-md px-4 py-2 outline-none placeholder:text-black"
                            />
                        </div>

                        <div className='relative  top-2.5 left-[15px]' >
                            <p className="text-red-950 text-sm">{errpass}</p>
                            <label className="block font-thin text-[20px] text-black-200 mb-1">Password</label>
                            <input
                                type="password"
                                name="pass"
                                value={form.pass}
                                onChange={manageform}
                                placeholder="Password"
                                className="w-[90%] h-[40px] bg-white/10 border border-black/40 rounded-md px-4 py-2 outline-none placeholder:text-black"
                            />
                        </div>

                        <div className='relative  top-2.5 left-[15px]' >
                            <p className="text-red-950 text-sm">{errcpass}</p>
                            <label className="block font-thin text-[20px] text-black-200 mb-1">Confirm Password</label>
                            <input
                                type="password"
                                name="cpass"
                                value={form.cpass}
                                onChange={manageform}
                                placeholder="Confirm Password"
                                className="w-[90%] h-[40px] bg-white/10 border border-black/40 rounded-md px-4 py-2 outline-none placeholder:text-black"
                            />
                        </div>

                        <div className="  flex  flex-col justify-center items-center gap-3 pt-2">
                            <button
                                type="submit"
                                className="w-[90%] h-[40px] text-black bg-green-400 hover:bg-transparent hover:border-2 transition py-2 rounded-lg font-semibold"
                            >
                                Sign Up
                            </button>

                            <p className="text-[18px] font-bold text-black">
                                Already have an account?
                                <Link
                                    to="/login"
                                    className="  text-blue-900 text-[18px] ml-1 hover:underline"
                                >
                                    Login
                                </Link>
                            </p>
                        </div>
                    </form>
                </Tilt>
            </motion.div>

       </div>


        </>
    )

}









export default Signup