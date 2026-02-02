import axios from 'axios'
// import { h1 } from 'framer-motion/client'
import { useState } from 'react'
import React, { useEffect } from 'react'
import "./MyBooking.css";



let MyBooking = () => {

  let [open, setOpen] = useState(null);
  let [Data, setdata] = useState([])
  

  let FatchData = () => {
    let api = "http://localhost:3000/patient"

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
    let api=`http://localhost:3000/patient/${id}`
    axios.delete(api).then((res)=>{
      FatchData()
    }).catch((err)=>{
      console.log(err)
    })
  }

  return (

    <>

     {Data.length > 0? (  <div className="booking-page">
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
                    <button className="reschedule-btn">Reschedule</button>
                  </div>
                  
                </div>
              )}

            </div>
          ))
        }
      </div>):(
        <h1 style={{textAlign:"center",marginTop:"80px", fontSize:"30px", fontWeight:"bold", color:"green"}}>No Appointments Booked</h1>
      )}



    </>
  );

};

export default MyBooking;
