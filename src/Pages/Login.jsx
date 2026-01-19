import React from 'react'
import '../App.css'
import { use, useState } from 'react'
import { useNavigate } from 'react-router-dom'



let Login=()=>{
  let navigate=useNavigate()

      let [form,setform]=useState({

       email:'',
       pass:''
       })

      let manageform=(e)=>{
      
      setform({...form, [e.target.name]:e.target.value })

      }

     let [error,seterror]=useState('')
     console.log(error);
     



    let Submit=(e)=>{

          let email = form.email.trim()
          let pass = form.pass.trim()
            
          e.preventDefault()
          console.log(form)
         let valid=true

        if (email == "") {

              e.preventDefault()
              valid=false

              seterror('Email required')

          }
        else if (!(email.includes("@") && email.includes(".com"))) {

              e.preventDefault()
              valid=false

              seterror('Enter valid email')

          }
        else if (pass == "") {
              e.preventDefault()
              valid=false

              seterror('Password required')
          }
        else if (!(pass.match(/[!@#$&*]/) && pass.match(/[a-z]/) && pass.match(/[1234567890]/))) {
              e.preventDefault()
              valid=false

              seterror('Enter Strong password use( 0-9,a-z,!@#$&* )')
          }

        let users=JSON.parse(localStorage.getItem('users')) || []

        let existuser=users.find((e)=>{
            return e.email==form.email
        })

        if (!existuser){
          alert('Please register first')
        
          navigate("/signup")
          
        }
        
        if(pass !=existuser.pass){
          alert("password invalid")
          return
        }

        alert("Login successful")
        navigate("/home")




  }



  return (

    <>
       <div className="main">

                <form onSubmit={Submit}>
                    <h1>Login</h1>
                    <p>{error}</p>
                    Email: <input type="text" name='email' value={form.email} onChange={manageform} />
                    Password: <input type="text" name='pass' value={form.pass} onChange={manageform} />

                    <button type='submit'>Submit</button>
                </form>

            </div>

    </>
  )
}

export default Login