import axios from 'axios';
import React from 'react'
import { useState } from 'react';

const Path = () => {
  const[source,setsource]=useState("");
  const[dest,setdest]=useState("");
  const[buy,setbuy]=useState(false);
  
  async function search_ticket(e){
    e.preventDefault();
    try {
      const resp=await axios.get(`/api/path`,{params:{
      sorce:source,
      destination:dest,
    }})
    if(resp.status===200){
      console.log(resp.data);
      setbuy(true);
    }
    } catch (error) {
      
    }
  }
  
  async function paymentroute(){
    axios.post('/api/payment',{
    })
  }
  return (
    <div>
      <form onSubmit={(e)=>{search_ticket(e)}}>
        <h4>source</h4>
        <textarea onChange={(e)=>{setsource(e.target.value)}}></textarea>
        <h4>destination</h4>
        <textarea onChange={(e)=>{setdest(e.target.value)}}></textarea>
      </form>
      {setbuy && <button onClick={()=>{paymentroute}}>buy ticket</button>}
    </div>
  )
}

export default Path
