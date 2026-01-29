import axios from 'axios'
import { h1 } from 'framer-motion/client'
import { useState } from 'react'
import React, { useEffect } from 'react'

let MyBookign=()=> {

  let [Data,setdata]=useState([])

  // console.log(typeof Data);  
  
  let FatchData=()=>{
    let api="http://localhost:3000/doctor"

    axios.get(api).then((res)=>{
      let data=res.data
      let finaldata=data.filter((e)=>{

        return e.loggedemail == localStorage.getItem("email")

      })

      setdata(finaldata)
      
    }).catch((err)=>{
      
    })
    console.log(Data)
    console.log(localStorage.getItem("email"));
  }

  useEffect(()=>{
    FatchData()
  },[])

  return (
    <>
    {
      Data.map(
        (e)=>(
        
          <>
          <h1>{e.name}</h1>
          <h1>{e.number}</h1>
          <h1>{e.email}</h1>
          <h1>{e.gender}</h1>
          <h1>{e.age}</h1>
          <h1>{e.date}</h1>
          <h1>{e.time}</h1>
          <h1>{e.loggedemail}</h1>
          </>
        )
          
        
      )
    }


    </>
  )
}

export default MyBookign