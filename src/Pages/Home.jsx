import React from 'react'
import './Home.css'

import crcl  from '../assets/banner_img_bg.png'
import doctor from '../assets/hero-image.png'
import aboutimg1 from '../assets/pexels-zeynep-ozata-2153642453-32828971.jpg'
import aboutimg2 from '../assets/pexels-shvetsa-4167541 (1).jpg'
import { Link } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import {useRef } from "react";
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from 'react'




let Home = () => {
  useGSAP(()=>{
       gsap.to(".hero-big-circel",{
      scale:1,
      duration:1,
      opacity:1,
      
    })
       gsap.to(".hero-img",{
     
      scale:1,
      duration:1.2,
      opacity:1,
      delay:0.3
    })
       gsap.to(".hero-circle",{
        rotate: 360,
         duration: 15,
         repeat: -1,
         ease: "linear",
         opacity:1,
    })
     
  })
   useEffect(() => {

    gsap.from(".hero-left> *", {
      y: -60,          // upar se drop
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,    // ek ek karke
      ease: "bounce.out" // drop feel
    })

  }, []);

  return (
    <>

    <section className="hero-section">

      <div className="hero-container">

        {/* LEFT CONTENT */}
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

          <Link to="/doctor" className="hero-btn">
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

        {/* RIGHT SIDE */}
        <div className="hero-right">

          <div className="hero-big-circel">

          <div className="hero-circle"><img src={crcl} alt="" /></div>

          <img  src={doctor} alt="doctor"  className="hero-img"/>
         
          </div>


        </div>

      </div>

    </section>


     <section className="about">

      <div className='bg-layar'></div>
      <div className="about-container">
        {/* LEFT IMAGES */}
        <div className="about-left-img">

          <div className="first-img">
            <img src={aboutimg1} alt="Doctor" />
          </div>

          <div className="second-img">
            <img src={aboutimg2} alt="Hospital" />
          </div>

        </div>

        {/* RIGHT CONTENT */}
        <div className="about-right-content">

          <h4>About </h4>
                
             <span>Our Healthcare Center</span>

          <h2>
            Trusted Medical Care <br /> For You And Your Family
          </h2>

          <p>
            We provide world-class healthcare services with advanced technology
            and experienced doctors. Our mission is to make quality healthcare
            accessible, affordable, and reliable for everyone.
          </p>
           

          <Link to="/about" className="about-btn">
            Discover More
          </Link>
         

        </div>

      </div>

    </section>
   


    



    </>
  )
}

export default Home