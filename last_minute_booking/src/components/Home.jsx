import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import './Home.css'

const Home = () => {
    const navigate=useNavigate();
    const sell_ticket=()=>{
        navigate('/sell_ticket')
    }
    function buy_ticket(){
        navigate('/buy_ticket');
    }
  return (
    <div className='bg-[url("/train.png")] bg-cover bg-center min-h-[calc(100vh-33px)] w-full overflow-hidden' >
      <div className='bg-white w-8/12 mx-auto opacity-90 px-3 py-2 absolute top-50 left-60 rounded-md'>
        <h1 className='text-6xl'>welcome to last minute booking</h1>
      <h5 className='font-bold pt-1'>one stop destination for buying and selling ticket</h5>
      <br/>
      <h4 className='text-2xl'>Unable to board the train. Sell your ticket here </h4>
      <button className="bg-blue-600 hover:bg-blue-600 text-white font-medium px-4 py-2 rounded-md border-b-2 border-b-gray-50 transition hover:cursor-pointer " onClick={sell_ticket}>
        sell ticket
      </button>
      <br />
      <br />
      <h4 className='text-2xl'>Need ticket on the go </h4>
      <button className="bg-blue-600 hover:bg-blue-600 text-white font-medium px-4 py-2  rounded-md border-b-2 border-b-gray-50 transition hover:cursor-pointer" onClick={buy_ticket}>
        buy ticket
      </button>
      <br />
      <br />
      <h5>For any doubt see terms</h5>
      </div>
    </div>
  )
}

export default Home
