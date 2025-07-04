import axios from 'axios';
import React from 'react'
import { useState } from 'react';

import{loadStripe} from "@stripe/stripe-js"
const Path = () => {
  const[source,setsource]=useState("");
  const[dest,setdest]=useState("");
  const[buy,setbuy]=useState(false);
  const[trains,settrains]=useState([]);
  const [sold,setsold]=useState(false)
  const[pnr_no,setpnr_no]=useState("")
  async function search_ticket(e){
    e.preventDefault();
    try {
      const resp=await axios.get(`/api/path`,{params:{
      sourceStation:source,
      reservationUpto:dest,
    }})
    if(resp.status===200){
      console.log(resp.data);
      setbuy(true);
      settrains(resp.data.avail);
      console.log(resp.data.avail);
    }
    } catch (error) {
      console.log("error while searching train for the given path")
      console.log(error.message)
    }
  }
  
  async function buy_this(_id,price,pnrnumber){
    console.log("req received")
    console.log(_id)
    console.log(price)
    const stripe=await loadStripe("pk_test_51RYQGSPvfO44d8OLZcZioT0Xnp6JCbL6914PRaKy8N5wsrTICekUovF7ZUieuPualb9JXZGR0OacCHLQDcwfcc3o00q2GRGQNn")
    const response=await axios.post("/api/make_payment",{
      price:price,
      _id:_id
    })
    if (response.data.url) {
    window.location.href = response.data.url; // redirect user to Stripe Checkout
     return;
    }
    if(response.status===200){
      const res=await axios.delete("/api/delete_ticket",{params:{
        _id:_id
      }})
      setpnr_no(pnrnumber)
      if(res.status===200){
        console.log("entry deleted successfully")
        setsold(true)
      }
    }
  }
  return (
    <div>
      <form onSubmit={(e)=>{search_ticket(e)}}>
        <h4>source</h4>
        <textarea onChange={(e)=>{setsource(e.target.value)
          console.log(source)
        }}></textarea>
        <h4>destination</h4>
        <textarea onChange={(e)=>{setdest(e.target.value)
          console.log(dest)
        }}></textarea>
        <button type={'submit'}></button>
      </form>
      {setbuy  && trains.map((train)=>(
        <div key={train._id}>
        <p>{train.train_no}</p>
        <p>{train.startdate}</p>
        <p>{train.sourceStation}</p>
        <p>{train.reservationUpto}</p>
        <p>{train.price}</p>
        <button onClick={()=>{buy_this(train._id,train.price,train.pnrnumber)}}>buy</button>
        </div>
      ))}
      {sold && (<h2>{pnr_no}</h2>)}
    </div>
  )
}

export default Path
