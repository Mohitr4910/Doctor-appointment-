import React from 'react'
import './Home.css'

import Img from '../assets/pexels-andre-124356440-11722768.jpg'
import Img1 from '../assets/doctors-8881540_1920.jpg'
import Img2 from '../assets/pexels-rdne-6129237 copy.jpg'




let Home = () => {
  return (
    <>

      <div className="hero">
        {/* Background Slider */}
        <div className="hero-bg">
          <img src={Img} />
          <img src={Img1} />
          <img src={Img2} />
          <img src={Img1} />


        </div>  
      </div>


    </>
  )
}

export default Home