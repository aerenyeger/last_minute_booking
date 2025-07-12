import axios from 'axios';
import React from 'react'
import { useState } from 'react';

import { loadStripe } from "@stripe/stripe-js"
const Path = () => {
  const [source, setsource] = useState("");
  const [dest, setdest] = useState("");
  const [buy, setbuy] = useState(false);
  const [trains, settrains] = useState([]);
  const [sold, setsold] = useState(false)
  const [pnr_no, setpnr_no] = useState("")
  const baseURL = import.meta.env.VITE_BACKEND_URL
  async function search_ticket(e) {
    e.preventDefault();
    try {
      const resp = await axios.get(`${baseURL}/api/path`, {
        params: {
          sourceStation: source,
          reservationUpto: dest,
        }
      })
      if (resp.status === 200) {
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

  async function buy_this(_id, price, pnrnumber) {
    console.log("req received")
    console.log(_id)
    console.log(price)
    const stripe = await loadStripe("pk_test_51RYQGSPvfO44d8OLZcZioT0Xnp6JCbL6914PRaKy8N5wsrTICekUovF7ZUieuPualb9JXZGR0OacCHLQDcwfcc3o00q2GRGQNn")
    const response = await axios.post(`${baseURL}/api/make_payment`, {
      price: price,
      _id: _id
    })
    if (response.data.url) {
      window.location.href = response.data.url; // redirect user to Stripe Checkout
      return;
    }
  }
  return (
    <div className='bg-[url("/train.png")] bg-cover bg-center min-h-[calc(100vh-33px)] w-full overflow-hidden'>
      <div className=' bg-white opacity-90 mx-auto w-8/12 pl-2 py-2 mt-1 rounded-md'>
        <form onSubmit={(e) => { search_ticket(e) }}>
          <h1 className='text-3xl font-bold'>Enter Source Staion and Destination Station in Station code Format</h1>
          <h5 className='text-1xl'>Example:New Dehi:NDLS,Rani Kamplapati:RKMP</h5>
          <br />
          <h4 className='text-2xl'>Source Station</h4>
          <textarea className="border" value={source} onChange={(e) => {
            setsource(e.target.value)
            console.log(source)
          }}></textarea>
          <h4 className='text-2xl '>destination Station</h4>
          <textarea className='border' value={dest} onChange={(e) => {
            setdest(e.target.value)
            console.log(dest)
          }}></textarea>
          <br />
          <button className="bg-blue-600 hover:bg-blue-600 text-white font-medium px-4 py-1 rounded-md border-b-2 border-b-gray-50 transition hover:cursor-pointer " type={'submit'}>Search</button>
        </form>
      </div>
      <div>
        {buy && trains.map((train) => (
          <div key={train._id} className='flex flex-row bg-white w-8/12 mx-auto my-2 justify-between opacity-90 border px-2 rounded-md'>
            <p>{train.train_no}</p>
            <p>{train.startdate}</p>
            <p>{train.sourceStation}</p>
            <p>{train.reservationUpto}</p>
            <p>{train.price}</p>
            <button className="bg-blue-600 hover:bg-blue-600 text-white font-medium px-4 py-2  rounded-md border-b-2 border-b-gray-50 transition hover:cursor-pointer" onClick={() => { buy_this(train._id, train.price, train.pnrnumber) }}>buy</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Path
