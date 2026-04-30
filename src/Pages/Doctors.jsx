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

let Doctors = () => {
 const [data, setdata] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const res = await axios.get("http://127.0.0.1:8000/doctor_list/");
        const data = res?.data?.data || res?.data || [];
        setdata(Array.isArray(data) ? data : []);
      } catch (err) {
        setError("Failed to load doctors");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []);




  return (
    <>


      <DoctorData data={data} />


    </>
  )
}

export default Doctors