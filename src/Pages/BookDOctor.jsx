import React, { useState } from 'react'
import "./Booking.css"
import { useNavigate } from 'react-router-dom'
import AnimatedContent from '../Components/animatedcontant'

function BookDOctor() {
    let navigate=useNavigate()


  let [form, setform] = useState({

    name: '',
    num: '',
    email: '',
    gender: '',
    age: '',
    speciality: '',
    date: '',
    time: '',
    symptoms: ''

  })




  let manageform = (e) => {

    setform({ ...form, [e.target.name]: e.target.value })

  }


  let Submit = (e) => {

    e.preventDefault()

    let valid = true
    if (form.name.trim() == "") {
      e.preventDefault()
      valid = false
      alert("name reqired")

    }
    else if (form.num.trim().length != 10) {
      e.preventDefault()
      valid = false

      alert("enter valid number")

    }
    else if (isNaN(form.num)) {
      e.preventDefault()
      valid = false

      alert("Enter avalid number")

    }
    else if (form.email.trim() == "") {
      e.preventDefault()
      valid = false

      alert("Email reqired")

    }
    else if (!(form.email.includes("@") && form.email.includes(".com"))) {
      e.preventDefault()
      valid = false

      alert("Enter valid email")

    }
    else if (form.gender.trim() == "") {
      e.preventDefault()
      valid = false

      alert("Gender reqired")

    }
    else if (form.age.trim() == "") {
      e.preventDefault()
      valid = false

      alert("age reqired")

    }
    else if (isNaN(form.age)) {
      e.preventDefault()
      valid = false

      alert("enter valid age")

    }
    else if (form.speciality.trim() == "") {
      e.preventDefault()
      valid = false

      alert("speciality reqired")

    }
    else if (form.date.trim() == "") {
      e.preventDefault()
      valid = false

      alert("date reqired")

    }
    else if (form.time.trim() == "") {
      e.preventDefault()
      valid = false

      alert("time reqired")

    }
    else if (form.symptoms.trim() == "") {
      e.preventDefault()
      valid = false

      alert("symptoms reqired")

    }

    if (valid) {

      let login=localStorage.getItem("email")

      if(login){
      let api = "http://localhost:3000/users"

      let loggedemail = localStorage.getItem("email")
    
      axios.post(api, { ...form, loggedemail: localStorage.getItem("email") }).then(
        () => {
          alert("Booking confirm")

        }
      
    
      )
    }
    else{
         alert("Please Login First")
        navigate("login")
    }

    }

  }
  return (
    <>
    

        <div className='content'>
       

          <div className='form-img'>
          <AnimatedContent distance={400} duration={2} ease="power4.out">
            {/* <img src={formimg} alt="" /> */}
          </AnimatedContent>
          </div>

          <AnimatedContent direction="horizontal" distance={400} duration={2} ease="power4.out">


          <form className='book-form' onSubmit={Submit}>
            <h1>Book Appointment</h1>

            <div className="input-group">
              <label>Name</label>
              <input type="text" name='name' value={form.name} onChange={manageform} placeholder="Full Name" />
            </div>

            <div className="input-group">
              <label>Number</label>
              <input type="text" name='num' value={form.num} onChange={manageform} placeholder="Mobile Number" />
            </div>

            <div className="input-group">
              <label>Email</label>
              <input type="text" name='email' value={form.email} onChange={manageform} placeholder="Email Address" />
            </div>

            <div className="input-group">
              <label>Gender</label>
              <select name='gender' value={form.gender} onChange={manageform} >
                <option value="">Select Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>

            </div>

            <div className="input-group">
              <label>Age</label>
              <input type="number" name='age' value={form.age} onChange={manageform} placeholder="Age" />
            </div>


            <div className="input-group">
              <label>Specialty</label>
              <select name='speciality' value={form.speciality} onChange={manageform} >
                <option>Select Specialty</option>
                <option>Cardiology</option>
                <option>Orthopedic</option>
                <option>Dental</option>
                <option>General Physician</option>
              </select>
            </div>

            <div className="row">
              <div className="input-group">
                <label>Date</label>
                <input type="date" name='date' value={form.date} onChange={manageform} />
              </div>

              <div className="input-group">
                <label>Time</label>

                <select name='time' value={form.time} onChange={manageform} >
                  <option value="">Time</option>
                  <option>10:00AM-11:00AM</option>
                  <option>11:30AM-12:30PM</option>
                  <option>01:00PM-02:00PM</option>
                  <option>03:00PM-04:00PM</option>
                  <option>04:00PM-05:00PM</option>
                </select>
              </div>
            </div>

            <div className="input-group">
              <label>Symptoms</label>
              <textarea rows="4" name='symptoms' value={form.symptoms} onChange={manageform} placeholder="Symptoms / Problem Information"></textarea>
            </div>

            <button type="submit">Book Appointment</button>
          </form>
          </AnimatedContent>

        </div>



      


    </>
  )
}

export default BookDOctor