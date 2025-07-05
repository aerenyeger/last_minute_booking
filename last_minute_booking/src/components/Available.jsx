import React from 'react'
import axios from 'axios';
import { useState } from 'react';
const Available = () => {
  const[amount,setamount]=useState(null);
  const[ticket,setticket]=useState(false);
  const baseURL=import.meta.env.VITE_BACKEND_URL
  async function pay(e){
    e.preventDefault();
   try {
     const response=await axios.post(`${baseURL}/api/pay`,{
      amount:amount
    })
    if(response.status===200){
      setticket(true);
    }
   } catch (error) {
    
   }
  }
  return (
    <div>
      ticket is Available
      <button onClick={(e)=>{pay(e)}}>pay</button>
      {ticket && {
      }}
    </div>
  )
}

export default Available
