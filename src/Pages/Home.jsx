import React from 'react'
import './Home.css'

import crcl from '../assets/banner_img_bg.png'
import doctor from '../assets/hero-image.png'
import aboutimg1 from '../assets/about-img1.jpg'
import aboutimg2 from '../assets/pexels-shvetsa-4167541 (1).jpg'
import bgvideo from '../assets/mixkit-doctor-shows-patient-brain-scan-on-large-screen-5642-hd-ready.mp4'
// import bgvideo2 from '../assets/Untitled design (6).mp4'

import doctor1 from "../assets/pexels-cristian-rojas-8460157.jpg"
import doctor2 from "../assets/pexels-pavel-danilyuk-5998474.jpg"
import doctor3 from "../assets/pexels-kooldark-14628069.jpg"
import doctor4 from "../assets/pexels-kooldark-27666710.jpg"
import { Link } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import { useRef } from "react";
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from 'react'
import AnimatedContent from '../Components/animatedcontant'




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
      ease: "bounce.out"
    })

  }, []);

  return (
    <>





      <section className="hero-section">
    
        <div className="hero-container">

          <div className="hero-left">

            <span className="hero-tag">
              Welcome To ClinicHub
            </span>

            <AnimatedContent >
            </AnimatedContent>
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

            <AnimatedContent direction="horizontal" reverse distance={400}
              duration={2}
              ease="power4.out">
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


              <Link to="/about" className="discover-btn">
                Discover More  ➜
              </Link>

            </AnimatedContent>

          </div>

        </div>

      </section>





      <section className="doctor-section">
        <div className="doctor-header">
          <span>Our Team</span>
          <h2>Meet Our Expert Doctor</h2>
        </div>

        <div className="doctor-cards">

    <AnimatedContent direction="horizontal" reverse distance={300}
                        duration={2}
                        ease="power4.out">

          <Link to="/about" >
            <div className="doctor-card">
              <img src={doctor1} alt="" />
              <div className="card-info">
                <h3>Dr.Shreya</h3>
                <p>Neurology</p>
                <small>MBBS, FCPS, FRCS</small>
                <button>+</button>
              </div>

            </div>
          </Link>
    </AnimatedContent>

      <AnimatedContent direction="horizontal" reverse distance={100}
                        duration={2}
                        ease="power4.out">


          <Link to="/about">
            <div className="doctor-card">
              <img src={doctor2} alt="" />
              <div className="card-info">
                <h3>Dr. Khushi</h3>
                <p>Cardiology</p>
                <small>MBBS, FCPS, FRCS</small>
                <button>+</button>
              </div>
            </div>

          </Link>
        </AnimatedContent>


  <AnimatedContent direction="horizontal"  distance={100}
                        duration={2}
                        ease="power4.out">

          <Link>
            <div className="doctor-card">
              <img src={doctor3} alt="" />
              <div className="card-info">
                <h3>Dr. Rohan</h3>
                <p>Ophthalmology</p>
                <small>MBBS, FCPS, FRCS</small>
                <button>+</button>
              </div>
            </div>

          </Link>
       </AnimatedContent>

         <AnimatedContent direction="horizontal" distance={300}
                        duration={2}
                        ease="power4.out">

          <Link>
            <div className="doctor-card">
              <img src={doctor4} alt="" />
              <div className="card-info">
                <h3>Dr. Neeraj</h3>
                <p>Pediatric</p>
                <small>MBBS, FCPS, FRCS</small>
                <button>+</button>
              </div>
            </div>

          </Link>
           </AnimatedContent>
        </div>

        <button className="view-btn">View More</button>
      </section>



      <section class="process-section">
        <div class="process-container">

          <span class="process-tag">How We Work</span>
          <h2>Our Working Process</h2>

          <div class="process-steps">

            <div class="step">
              <div class="step-circle green">01</div>
              <h3>Fill The Form</h3>
              <p>Lorem ipsum dolor sit amet consectetur ipsam adipisicing elit.</p>
            </div>

            <div class="step">
              <div class="step-circle blue">02</div>
              <h3>Book An Appointment</h3>
              <p>Lorem ipsum dolor sit amet consectetur ipsam adipisicing elit.</p>
            </div>

            <div class="step">
              <div class="step-circle pink">03</div>
              <h3>Check-Ups</h3>
              <p>Lorem ipsum dolor sit amet consectetur ipsam adipisicing elit.</p>
            </div>

            <div class="step">
              <div class="step-circle yellow">04</div>
              <h3>Get Reports</h3>
              <p>Lorem ipsum dolor sit amet consectetur ipsam adipisicing elit.</p>
            </div>

            <svg class="wave-line" viewBox="0 0 1200 200">
              <path d="M0,100 C150,0 300,200 450,100 600,0 750,200 900,100 1050,0 1200,100"
                fill="none"
                stroke="#9fd7ff"
                stroke-width="2"
                stroke-dasharray="6 6" />
            </svg>

          </div>
        </div>
      </section>





    </>
  )
}

export default Home