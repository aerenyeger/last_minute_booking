import React, { useState } from 'react'
import axios from 'axios';
const Train_no = () => {
  const [train_number, settrain_number] = useState('');
  const[trains,settrains]=useState([]);
  const[avail,setavail]=useState(false)
  const [sold,setsold]=useState(false)
  const[pnr_no,setpnr_no]=useState("")
  async function search_train(e) {
    e.preventDefault();
    try {
      const response = await axios.get("/api/train_no/", {
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
    const res=await axios.post("/api/make_payment",{
      _id:_id,
      price:price
    })
    if(res.status===200){
      console.log("payment successfull")
    }
    setpnr_no(pnrnumber);
    const response=await axios.delete("/api/delete_ticket",{params:{
      _id:_id
    }})
    if(response.status===200){
      console.log("ticket successfully sold")
      setsold(true)
    }
  }
  return (
    <div>
      <form onSubmit={(e) => { search_train(e) }}>
        <textarea rows={1} onChange={(e) => {
          settrain_number(e.target.value);
          console.log(train_number);
        }}>
        </textarea>
        <button type="submit"></button>
      </form>
      {avail && trains.map((train)=>{
        return<div key={train._id}>
        <p>{train.train_no}</p>
        <p>{train.startdate}</p>
        <p>{train.sourceStation}</p>
        <p>{train.reservationUpto}</p>
        <p>{train.price}</p>
        <button onClick={()=>{make_payment(train._id,train.price,train.pnrnumber)}}>buy</button>
        </div>
        })}
        {sold && (<h2>{pnr_no}</h2>)}
    </div>
  )
}

export default Train_no
