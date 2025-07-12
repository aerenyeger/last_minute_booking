import React, { useState } from 'react'
import axios from 'axios';
import "./Train_no.css"
import { loadStripe } from '@stripe/stripe-js';
import toast from 'react-hot-toast';
const Train_no = () => {
  const [train_number, settrain_number] = useState('');
  const[trains,settrains]=useState([]);
  const[avail,setavail]=useState(false)
  const [sold,setsold]=useState(false)
  const[pnr_no,setpnr_no]=useState("")
  const baseURL=import.meta.env.VITE_BACKEND_URL
  async function search_train(e) {
    e.preventDefault();
    try {
      const response = await axios.get(`${baseURL}/api/train_no/`, {
        params: {
          train_number: train_number, // ✅ matches backend
        }
      });
      settrains(response.data.avail);
      console.log(trains)
      setavail(true)
    } catch (error) {
      console.log("error while fetching")
    }
  }
  async function make_payment(_id,price,pnrnumber){
    const stripe=await loadStripe("pk_test_51RYQGSPvfO44d8OLZcZioT0Xnp6JCbL6914PRaKy8N5wsrTICekUovF7ZUieuPualb9JXZGR0OacCHLQDcwfcc3o00q2GRGQNn")
    const res=await axios.post(`${baseURL}/api/make_payment`,{
      _id:_id,
      price:price,
      pnrnumber:pnrnumber
    })
    if (res.data.url) {
    window.location.href = res.data.url; // redirect user to Stripe Checkout
}
    setpnr_no(pnrnumber);
  }
  return (
    <div className='bg-[url("/train.png")] bg-cover bg-center min-h-[calc(100vh-33px)] w-full overflow-hidden flex flex-col'>
      <div className='ml-150 mb-2 bg-white w-110 pl-3 mt-2'>
        <form onSubmit={(e) => { search_train(e) }}>
          <h1 className='font-bold text-3xl'>Enter Train Number to search</h1>
        <textarea className="border my-2" rows={1} onChange={(e) => {
          settrain_number(e.target.value);
          console.log(train_number);
        }}>
        </textarea>
        <button className="bg-blue-600 hover:bg-blue-600 text-white font-medium px-4 py-2 mx-2  rounded-md border-b-2 border-b-gray-50 transition hover:cursor-pointer" type="submit">search</button>
      </form>
      </div>
      <div className='w-10/12 mx-auto '>
        {avail && trains.map((train)=>{
        return<div key={train._id} className='bg-white w-full mx-auto flex flex-row justify-evenly pb-1'>
        <div className='flex flex-row justify-evenly   '>
          <p className='inline-block mr-43' >{train.train_no}</p>
        <p className='inline-block mr-43'>{train.startdate}</p>
        <p className='inline-block mr-43'>{train.sourceStation}</p>
        <p className='inline-block mr-43'>{train.reservationUpto}</p>
        <p className='inline-block mr-43'>{train.price}</p>
        <button className='bg-blue-600 hover:bg-blue-600 text-white font-medium px-4  rounded-md border-b-2 border-b-gray-50 transition hover:cursor-pointer' onClick={()=>{make_payment(train._id,train.price,train.pnrnumber)}}>buy</button>
        </div>
        </div>
        })
        }
      </div>
    </div>
  )
}

export default Train_no
