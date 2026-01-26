import React from 'react'
import "./Booking.css"
import video1 from "../assets/Health-and-Medicine.mp4"


   let Booking=()=> {
  return (
    <>

   


    <section class="appointment-section">
  <div class="appointment-wrapper">

    <div class="form-area">
      <h2>Book Doctor Appointment</h2>

      <form>
        <div class="input-group">
          <input type="text" placeholder="Full Name" required/>
        </div>

        <div class="input-group">
          <input type="tel" placeholder="Mobile Number" required/>
        </div>

        <div class="input-group">
          <input type="email" placeholder="Email Address"/>
        </div>

        <div class="input-group">
          <select required>
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>

        <div class="input-group">
          <input type="number" placeholder="Age" required/>
        </div>

        <div class="input-group">
          <select required>
            <option value="">Select Specialty</option>
            <option>Cardiology</option>
            <option>Orthopedic</option>
            <option>Dental</option>
            <option>General Physician</option>
          </select>
        </div>

        <div class="row">
          <div class="input-group">
            <input type="date" required/>
          </div>

          <div class="input-group">
            <input type="time" required/>
          </div>
        </div>

        <div class="input-group">
          <textarea rows="4" placeholder="Symptoms / Problem Information"></textarea>
        </div>

        <button type="submit">Book Appointment</button>
      </form>
    </div>

    {/* <div class="wave-divider"></div> */}

    <div class="video-area">
      <video autoPlay muted loop  playsinline>
        <source src={video1} type="video/mp4"/>
      </video>
    </div>

  </div>
</section>




    </>
  )
}

export default Booking