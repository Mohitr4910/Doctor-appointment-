import React from 'react'
import herobg from "../assets/pngtree-professional-doctor-analyzing-medical-data-on-computer-screen-picture-image_16352846.jpg"
import './About.css'
import helpline from '../assets/helpline_img.png'
import bgvideo from '../assets/mixkit-doctor-listening-to-a-heartbeat-at-hospital-6562-hd-ready.mp4'


import gallery1 from '../assets/hospital-2354843.jpg'
import gallery2 from '../assets/medical-5051148_1920.jpg'
import gallery3 from '../assets/medicine-91754.jpg'
import gallery4 from '../assets/operation-540598.jpg'
import gallery5 from '../assets/operation-theater-6142851.jpg'
import gallery6 from '../assets/hospital-1802679.jpg'
import gallery7 from '../assets/doctor-79603.jpg'
import gallery8 from '../assets/pngtree-professional-doctor-analyzing-medical-data-on-computer-screen-picture-image_16352846.jpg'
import gallery9 from '../assets/hospital-4904920.jpg'



let About = () => {
  return (
    <>
      <section className='hero'>

        <div className="video-bg">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          >
            <source src={bgvideo} type="video/mp4" />
          </video>
        </div>

        <div className='hero-content'>

          <h1>Your Health. <span> Our Priority.</span></h1>
          <p>“Because every life deserves the best care.”</p>
        </div>
      </section>


      <section class="gallery-section">
        <div class="gallery-container">

          <div class="gallery-header">
            <h2>Our Hospital Gallery</h2>
            <p>Explore our modern facilities, advanced technology, and caring environment.</p>
          </div>

            <div class="galleryfirst">
              <img src={gallery1} alt="" />
            </div>

          <div class="gallery-grid">

            <div class="gallery-item">
              <img src={gallery2} alt="Operation Theatre"/>
            </div>

            <div class="gallery-item">
              <img src={gallery3} alt="Patient Room"/>
            </div>

            <div class="gallery-item">
              <img src={gallery4} alt="Doctor Consultation"/>
            </div>

            <div class="gallery-item">
              <img src={gallery5} alt="Medical Equipment"/>
            </div>

            <div class="gallery-item">
              <img src={gallery6} alt="Hospital Corridor"/>
            </div>

            <div class="gallery-item">
              <img src={gallery7} alt="Hospital Corridor"/>
            </div>

            <div class="gallery-item">
              <img src={gallery8} alt="Hospital Corridor"/>
            </div>

            <div class="gallery-item">
              <img src={gallery9} alt="Hospital Corridor"/>
            </div>
          </div>
        </div>
      </section>



      <section className='emergency'>


        <div className='main'>


          <div className='right-side'>
            <span>🚨Emergency Helpline</span>

            <h1>Need Emergency Contact</h1>
            <p>We’re Here When You Need Us
              In case of emergency, our doctors are available 24/7 to help you.</p>
            <p>Call our emergency helpline for immediate assistance.</p>
            <ul>
              <li>Ambulance Services</li>
              <li>Pharmacy On Clinic</li>
              <li>24/7 Medical Emergency</li>
              <li>24/7 Contact Our Hospital</li>
            </ul>
            <div>
              <h2>Emergency Contact Our Phone Number.</h2>
              <div><h3>Phone Number</h3><p>+91 930277082</p></div>
              <div><h3>Quick Your Email</h3><p>help@.gmail.com</p></div>
            </div>

          </div>

          <div className='left-side'>
            <img src={helpline} alt="" />
          </div>

        </div>
      </section>

    </>
  )
}

export default About