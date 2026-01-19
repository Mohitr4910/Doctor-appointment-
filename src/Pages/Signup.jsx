import React from 'react'
import './Signup.css'
import { use, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

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
        console.log(form)

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
           


            <div className="min-h-screen flex items-center justify-center bg-blue-200 px-4">
                <form onSubmit={Submit} className="w-[50%] max-w-md bg-white rounded-2xl shadow-xl p-8 space-y-5">
                    <h1 className="text-3xl font-bold text-center text-black">Create Account</h1>


                    <div>
                        <p className="text-red-500 text-sm font-medium">{errname}</p>
                        <label className="block text-gray-700 font-medium mb-1">Name</label>
                        <input type="text" name="name" value={form.name} onChange={manageform} placeholder="Enter your name"
                        className="w-[90%] px-4 py-1  border rounded-lg focus:outline-none"/>
                    </div>

                    <div>
                        <p className="text-red-500 text-sm font-medium">{erremail}</p>
                        <label className="block text-gray-700 font-medium mb-1">Email</label>
                        <input type="text" name="email" value={form.email} onChange={manageform} placeholder="Enter your email"
                        className="w-[90%] px-4 py-1  border rounded-lg focus:outline-none "/>        
                    </div>

                    <div>
                        <p className="text-red-500 text-sm font-medium">{errnum}</p>
                        <label className="block text-gray-700 font-medium mb-1">Contact</label>
                        <input type="text" name="contact" value={form.contact} onChange={manageform} placeholder="10 digit number"
                            className="w-[90%] px-4 py-1  border rounded-lg focus:outline-none" />
                    </div>     
                       
                    <div>
                        <p className="text-red-500 text-sm font-medium">{errpass}</p>
                        <label className="block text-gray-700 font-medium mb-1">Password</label>
                        <input type="text" name="pass"  value={form.pass}  onChange={manageform} placeholder="Enter password"
                           className="w-[90%] px-4 py-1  border rounded-lg focus:outline-none"/>
                    </div>

                    <div>
                        <p className="text-red-500 text-sm font-medium">{errcpass}</p>
                        <label className="block text-gray-700 font-medium mb-1">Confirm Password</label>
                        <input type="text"name="cpass" value={form.cpass} onChange={manageform} placeholder="Confirm password"
                         className="w-[90%] px-4 py-1  border rounded-lg focus:outline-none" />   
                    </div>

                    <div className='flex flex-col justify-center items-center  m-4 gap-2.5'>          
                    <button type="submit" className="w-[40%] text-center bg-black text-white py-2 rounded-lg font-semibold cursor-pointer">Sign Up</button>

                    <p className="text-sm text-center text-gray-600"> Already have an account?
                        <Link to="/login" className=" font-medium cursor-pointer ml-1 text-amber-950"> Login</Link>
                    </p>
              </div>
                </form>
            </div>
        </>
     )
                                                  
}
                           
                           
                           
                    





export default Signup