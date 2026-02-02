import React from 'react'
import './Home.css'

import crcl from '../assets/banner_img_bg.png'
import doctor from '../assets/hero-image.png'
import aboutimg1 from '../assets/about-img1.jpg'
import aboutimg2 from '../assets/pexels-shvetsa-4167541 (1).jpg'
import bookingimg from '../assets/doctors-8881540_1920.jpg'
import bgvideo from '../assets/mixkit-doctor-shows-patient-brain-scan-on-large-screen-5642-hd-ready.mp4'
// import bgvideo2 from '../assets/Untitled design (6).mp4'

import doctor1 from "../assets/pexels-cristian-rojas-8460157.jpg"
import doctor2 from "../assets/pexels-pavel-danilyuk-5998474.jpg"
import doctor3 from "../assets/pexels-kooldark-14628069.jpg"
import doctor4 from "../assets/pexels-kooldark-27666710.jpg"
import { Link, useNavigate } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useEffect } from 'react'
import AnimatedContent from '../Components/animatedcontant'
import Doctors from './Doctors'




let Home = () => {
  useGSAP(() => {
    gsap.to(".hero-big-circel", {
      scale: 1,
      duration: 1,
      opacity: 1,

    })
    gsap.to(".hero-img", {

      scale: 1,
      duration: 1.2,
      opacity: 1,
      delay: 0.3
    })
    gsap.to(".hero-circle", {
      rotate: 360,
      duration: 15,
      repeat: -1,
      ease: "linear",
      opacity: 1,
    })

  })


  useEffect(() => {

    gsap.from(".hero-left> *", {
      y: -60,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "bounce.out",
       clearProps: "all"
    })

  }, []);


  let navigate=useNavigate()
    let login=()=>{
       let login=localStorage.getItem("email")
  
      if(!login){
        alert("Please Login First")
        navigate("login")
         
      }
      else{
          navigate("booking")
      }
    }

  return (
    <>

      <section className="hero-section">
    
        <div className="hero-container">

          <div className="hero-left">

            <span className="hero-tag">
              Welcome To ClinicHub
            </span>
            <h1>
              We Are Committed <br />
              To Your Health
            </h1>

            <p>
              It is a established fact that a reader will be distracted by the
              readable content of a page when looking at this layout.
            </p>


            <Link to="/doctors" className="hero-btn">
              Meet A Doctor
            </Link>

            <div className="hero-stats">

              <div className="stat-box">
                <h2>355k+</h2>
                <span>Recovered Patients</span>
              </div>

              <div className="stat-box">
                <h2>98%</h2>
                <span>Good Reviews</span>
              </div>

              <div className="stat-box">
                <h2>120+</h2>
                <span>Doctors</span>
              </div>

            </div>

          </div>
          <div className="hero-right">

            <div className="hero-big-circel">
              <div className="hero-circle"><img src={crcl} alt="" />
              </div>

              <img src={doctor} alt="doctor" className="hero-img" />

            </div>


          </div>

        </div>

      </section>

      <section className="about-section">

        <div className="about-video-bg">
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
        
        <div className="about-wrapper">

          <div className="about-images">

            <AnimatedContent direction="horizontal" reverse distance={400} duration={2} ease="power4.out">
              
              <div className="img-large">
                <img src={aboutimg1} alt="medical" />
              </div>

              <div className="img-small">
                <img src={aboutimg2} alt="doctor" />

              </div>
            </AnimatedContent>

          </div>

          <div className="about-content">

            <AnimatedContent distance={-200}
              duration={4}
              ease="power4.out">

              <h1 className="about-tag">About Us</h1>
            </AnimatedContent>

            <AnimatedContent direction="horizontal" distance={400}
              duration={2}
              ease="power4.out">
              <h2>
                The Great Place Of Medical Hospital Center.
              </h2>

              <p>
                We provide complete healthcare solutions with modern technology
                and experienced professionals. Our goal is to deliver safe,
                reliable and affordable treatment with world class facilities.
              </p>




              <div className="about-features">

                <ul>
                  <li>Ambulance Services</li>
                  <li>Pharmacy On Clinic</li>
                  <li>24/7 Medical Emergency</li>
                </ul>
                <ul>
                  <li>Oxygen On Wheel</li>
                  <li>On Duty Doctors</li>
                </ul>

              </div>


              <Link to="/about" className="discover-btn" >
                Discover More  ➜
              </Link>

            </AnimatedContent>

          </div>

        </div>

      </section>





      <section >
       <Doctors />

      </section>



      <div className='book-doctor'>
         <AnimatedContent   direction="horizontal" reverse distance={300}
                duration={2}
                ease="power4.out">

        <div className='booking-content'>

        <span>Get in Touch</span>
        <h1>Best Medical & Health Care Near Your City</h1>
        <p>We believe everyone deserves access to quality healthcare. Our dedicated medical team is committed to providing safe, reliable, and affordable treatment for patients of all ages in your city.</p>

        <button onClick={login}>Get Appointment</button>

        </div>
                </AnimatedContent>
        <div className='booking-img'>
          <AnimatedContent   direction="horizontal" distance={300}
                duration={2}
                ease="power4.out">

          <img src={bookingimg} alt="" />
                </AnimatedContent>
        </div>
      </div>





    </>
  )
}

export default Home