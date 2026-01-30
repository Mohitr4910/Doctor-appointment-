import React from 'react'
import { useNavigate } from 'react-router-dom'

let IsLogin=()=> {
  
  let navigate=useNavigate()

   let login=localStorage.getItem("email")
  
      if(!login){
        alert("Please Login First")
        navigate("login")
         
      }
      else{
          navigate("booking")
      }
   

}

export default IsLogin