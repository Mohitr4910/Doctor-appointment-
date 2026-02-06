import React from 'react'
import "./MyBooking.css"
import { useState } from 'react'
import formimg from "../assets/appoinment_page_img.png"
import bgvideo from '../assets/267871.mp4'
import axios from 'axios'
import { Navigate, useLocation } from 'react-router-dom'
import AnimatedContent from '../Components/animatedcontant'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

let MyBooking = () => {

  let [open, setOpen] = useState(null);
  let [Data, setdata] = useState([])
  let [editid, seteditid] = useState(null)
  let [form, setform] = useState({
    name: "",
    num: "",
    email: "",
    gender  : "",
    age: "",
    speciality: "",
    date: "",
    time: "",
    symptoms: "",
    doctorname:""
  })


  let FatchData = () => {
    // let api = "http://localhost:3000/patient"
    let api = "http://127.0.0.1:8000/patient_list/"

    axios.get(api).then((res) => {
      let data = res.data
      let finaldata = data.filter((e) => {

        return e.loggedemail == localStorage.getItem("email")

      })

      setdata(finaldata)

    }).catch((err) => {

    })
  
  }

  useEffect(() => {
    FatchData()
  }, [])


  let Delete=(id)=>{
    // let api=`http://localhost:3000/patient/${id}`
    let api=`http://127.0.0.1:8000/patient_detail/${id}/`
    axios.delete(api).then((res)=>{
      FatchData()
    }).catch((err)=>{
      console.log(err)
    })
  }

  let handleChange=(e)=>{
    setform({...form,[e.target.name]:e.target.value})
  }

  let handleSubmit=(e)=>{
    e.preventDefault()
    let loggedemail=localStorage.getItem("email")
    // let api=`http://localhost:3000/patient/${editid}`
    let api=`http://127.0.0.1:8000/patient_detail/${editid}/`
    axios.put(api,{...form,loggedemail:loggedemail}).then((res)=>{
      FatchData()
      seteditid(null)
    }).catch((err)=>{
      console.log(err)
    })
  }

  let Update=(e)=>{
     seteditid(e.id)
     setform({
      name: e.name,
      num: e.num,
      email: e.email, 
      gender: e.gender,
      age: e.age, 
      speciality: e.speciality,
      date: e.date,
      time: e.time,
      symptoms: e.symptoms,
      doctorname: e.doctorname
     })
  }

 


  return (

    <>


     {editid===null && Data.length > 0? (  <div className="booking-page">
        {
          Data.map((e) => (
            <div className="booking-card">

              <div className="booking-top" onClick={() => setOpen(open === e.id ? null : e.id)}>
                <div className="top-left">
                  <h3>{e.name}</h3>
                </div>

                <div className={`arrow ${open === e.id ? "rotate" : ""}`}>⌄</div>
              </div>

              {open === e.id && (
                <div className="dropdown-content">

                  <div className="booking-grid">
                    <div className="info-box">
                      <label>Doctor Name</label>
                      <p>{e.doctorname}</p>
                    </div>

                    <div className="info-box">
                      <label>Mobile</label>
                      <p>{e.num}</p>
                    </div>

                    <div className="info-box">
                      <label>Email</label>
                      <p>{e.email}</p>
                    </div>

                    <div className="info-box">
                      <label>Gender</label>
                      <p>{e.gender}</p>
                    </div>

                    <div className="info-box">
                      <label>Age</label>
                      <p> {e.age}Years</p>
                    </div>

                    <div className="info-box">
                      <label>Speciality</label>
                      <p className="badge">{e.speciality}</p>
                    </div>

                    <div className="info-box">
                      <label>Date</label>
                      <p>{e.date}</p>
                    </div>

                    <div className="info-box">
                      <label>Time</label>
                      <p>{e.time}</p>
                    </div>
                  </div>

                  <div className="symptoms-box">
                    <label>Symptoms</label>
                    <p>{e.symptoms}</p>
                  </div>

                  <div className="booking-footer">
                    <button onClick={()=>{Delete(e.id)}} className="cancel-btn">Cancel</button>
                    <button onClick={()=>{Update(e)}} className="reschedule-btn">Reschedule</button>
                  </div>
                  
                </div>
              )}

            </div>
          ))
        }
      </div>) :("")}

      
      {editid !==null && (<div className='main'>
          <video muted className="bg-video">
               <source src={bgvideo} type="video/mp4" />
          </video>

        <div className='content'>
       

          <div className='form-img'>
          <AnimatedContent distance={400} duration={2} ease="power4.out">
            <img src={formimg} alt="" />
          </AnimatedContent>
          </div>

          <AnimatedContent direction="horizontal" distance={400} duration={2} ease="power4.out">


          <form className='book-form' onSubmit={handleSubmit}>
            <h1>Book Appointment</h1>

            <div className="input-group">
              <label>Patient Name</label>
              <input type="text" name='name' value={form.name} onChange={handleChange}  placeholder="Full Name" />
            </div>

            <div className="input-group">
              <label>Number</label>
              <input type="text" name='num' value={form.num} onChange={handleChange}  placeholder="Mobile Number" />
            </div>

            <div className="input-group">
              <label>Email</label>
              <input type="text" name='email' value={form.email} onChange={handleChange}   placeholder="Email Address" />
            </div>

            <div className="input-group">
              <label>Gender</label>
              <select name='gender' value={form.gender}  onChange={handleChange}>
                <option value="">Select Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>

            </div>

            <div className="input-group">
              <label>Age</label>
              <input type="number"  name='age' value={form.age} onChange={handleChange} placeholder="Age" />
            </div>


            <div className="input-group">
              <label>Specialty</label>
              <select name='speciality' value={form.speciality} onChange={handleChange} >
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
                <input type="date"  name='date' value={form.date} onChange={handleChange} />
              </div>

              <div className="input-group">
                <label>Time</label>

                <select name='time' value={form.time} onChange={handleChange} >
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
              <textarea rows="4" name='symptoms' value={form.symptoms} onChange={handleChange} placeholder="Symptoms / Problem Information"></textarea>
            </div>

            <button type="submit">Update</button>
          </form>
          </AnimatedContent>

        </div>
       </div>
      )}


    </>
  );

};

export default MyBooking;
