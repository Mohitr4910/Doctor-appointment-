import React from 'react'
import './Doctor.css'
import DoctorData from '../Components/DoctorsData.jsx'
import AnimatedContent from '../Components/animatedcontant'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'

import doctor1 from "../assets/pexels-cristian-rojas-8460157.jpg"
import doctor2 from "../assets/pexels-pavel-danilyuk-5998474.jpg"
import doctor3 from "../assets/pexels-kooldark-14628069.jpg"
import doctor4 from "../assets/pexels-kooldark-27666710.jpg"

function Doctors() {

 let Data = [
      {
      "name":"Dr.Abhishek",
      "speciality":"Neurology",
      "degree":"MBBS, FCPS, FRCS",
      "image": doctor1

    },
      {
      "name":"Dr.Khushi",
      "speciality":"Cardiology",
      "degree":"MBBS, FCPS, FRCS",
      "image": doctor2


    },
      {
      "name":"Dr.Rohan",
      "speciality":"Ophthalmology",
      "degree":"MBBS, FCPS, FRCS",
      "image": doctor3


    },
      {
      "name":"Dr.Neeraj",
      "speciality":"Pediatric",
      "degree":"MBBS, FCPS, FRCS",
      "image": doctor4


    }
  ]



  return (
    <>


      <DoctorData data={Data} />


    </>
  )
}

export default Doctors