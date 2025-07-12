import React, { useEffect } from 'react'
import toast from 'react-hot-toast';
import { useSearchParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import axios from "axios"
const Sold = () => {
  const[params]=useSearchParams();
  const pnrnumber=params.get("pnrnumber");
  const _id=params.get("_id");
  const navigate=useNavigate();
  useEffect(()=>{

      async function deleteTicket(){
        try {
          const res=await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/api/delete_ticket`,{params:{
          _id:_id
        }})
        if(res.status===200){
          console.log("ticket deleted successfully")
        }
        else{
          navigate("/")
        }
        } catch (error) {
          console.log(error.message)
        }
      }
      deleteTicket();
    } 
  ,[_id,navigate])
  return (
    <div>
      <h1>Cogratulations payment Successfull Your PNR number is</h1>
      <br />
      <h1>{pnrnumber}</h1>
      <h1>Happy Journey</h1>
    </div>
  )
}

export default Sold
