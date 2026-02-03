import React from 'react'
import { Link } from 'react-router-dom'

import doctor1 from "../assets/pexels-cristian-rojas-8460157.jpg"
import doctor2 from "../assets/pexels-pavel-danilyuk-5998474.jpg"
import doctor3 from "../assets/pexels-kooldark-14628069.jpg"
import doctor4 from "../assets/pexels-kooldark-27666710.jpg"
import AnimatedContent from './animatedcontant'

function DoctorsData({ data }) {
  return (
    <>
          <section className="doctor-section">
        <div className="doctor-header">
          <span>Our Team</span>
          <h2>Meet Our Expert Doctor</h2>
        </div>

        <div className="doctor-cards">

            {data.map((e,i)=>(



                
                <AnimatedContent distance={300}
                duration={1+i*1}
                ease="power4.out">

              <Link to="/booking" key={i} state={{DoctorData:e}}  >
              <div className="doctor-card">
                <img src={e.image} alt="" />
                <div className="card-info">
                  <h3>{e.name}</h3>
                  <p>{e.speciality}</p>
                  <small>{e.degree}</small>
                  <button>+</button>
                </div>

              </div>
            </Link>
          </AnimatedContent>
        
          )
            )}
        </div>
       </section>
    </>
  )
}

export default DoctorsData