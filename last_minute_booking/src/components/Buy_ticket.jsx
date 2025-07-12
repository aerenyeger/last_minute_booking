import React from 'react'
import { useNavigate } from 'react-router-dom'
import Train_no from './Train_no';
const Buy_ticket = () => {
  const navigate=useNavigate();
  function navigate_to_Train_no(){
    navigate("/Train_no");
  }

  function navigate_to_path(){
    navigate("/path");
  }

  return (
    <div className='bg-[url("/train.png")] w-full min-h-[calc(100vh-33px)] bg-cover'>
      <div className='bg-white w-80 absolute top-60 left-150 p-2 rounded-md'>
        <h1 className='font-bold text-5xl'>Buy Ticket </h1>
        <br />
      <h1 className='text-2xl'>Search with source and dest</h1>
      <button className="bg-blue-600 hover:bg-blue-600 text-white font-medium px-4 py-2 rounded-md border-b-2 border-b-gray-50 transition hover:cursor-pointer "onClick={navigate_to_path}>
        path
      </button>
      <br />
      <br />
      <h1 className=' text-2xl'>Search with Train Number</h1>
      <button className="bg-blue-600 hover:bg-blue-600 text-white font-medium px-4 py-2 rounded-md border-b-2 border-b-gray-50 transition hover:cursor-pointer " onClick={navigate_to_Train_no}>
        train_number
      </button>
      </div>
    </div>
  )
}

export default Buy_ticket
