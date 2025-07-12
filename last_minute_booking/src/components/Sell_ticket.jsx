import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import toast from "react-hot-toast"
const Sell_ticket = () => {
  const [pnrNo, setPnrNo] = useState(null);
  const [count, setcount] = useState(0);
  const [confirmation, setconfirmation] = useState(false);
  const [upi_id, setupi_id] = useState("");
  const [train_data, settrain_data] = useState([]);
  const [isSubmitting, setisSubmitting] = useState(false)
  const [selling, setselling] = useState(false)
  const baseURL = import.meta.env.VITE_BACKEND_URL
  async function pnr_check(e) {
    e.preventDefault();
    try {
      setisSubmitting(true)
      const response = await axios.get(`${baseURL}/api/search_pnr`, {
        params: {
          pnr_no: pnrNo
        }
      })
      console.log(response.data)
      if (response.data.success === true) {
        setconfirmation(true)
        settrain_data(response.data);
        toast.success("pnr number is valid")
      }
      else{
        toast.error("invalid pnr")
      }
      console.log(response.data.success)
    }
    catch (error) {
      console.log("error while catchiing")
      toast.error(error.message)
    }
    finally {
      setisSubmitting(false)
    }
  }

  // api call 
  async function save_pnr() {
    try {
      const response = await axios.post(`${baseURL}/api/save_pnr`, {
        pnrNo: pnrNo,
        upi_id: upi_id,
        startdate: train_data.data.dateOfJourney,
        journeyclass: train_data.data.journeyClass,
        price: train_data.data.ticketFare,
        sourceStation: train_data.data.sourceStation,
        reservationUpto: train_data.data.reservationUpto,
        train_no: train_data.data.trainNumber
      })
      console.log(train_data.data.dateOfJourney);
      console.log(train_data.data.journeyClass);
      if (response.status === 200) {
        console.log("pnr saved amount will be credited to the upi when the ticket is sold")
        setselling(true)
        toast.success("ticket saved successfully")
      }
      else{
        toast.error("this ticket cant be sold")
      }
    } catch (error) {
      console.log("error while saving the pnr")
      toast.error(error.message)
    }
  }
  return (
    <div className=' bg-[url("/train.png")] bg-cover bg-center min-h-[calc(100vh-33px)] w-full overflow-hidden'>
      <div className=' bg-white absolute top-60 left-140 p-3 rounded-md opacity-90'>
        <form onSubmit={(e) => { pnr_check(e) }}>
          <h1 className='text-4xl font-bold'>Sell Your Ticket here..</h1>
          <h1>Enter valid 10 digit PNR Number and UPI Id</h1>
          <br />
          <h5>PNR No</h5>
          <textarea className="border border-black" disabled={isSubmitting} maxLength={10} rows={1} onChange={(e) => {
            setPnrNo(e.target.value); setcount(e.target.value.length)
            console.log(pnrNo)
          }}></textarea>
          <br />
          <br />
          <h5>UPI Id</h5>
          <textarea className="border border-black" disabled={isSubmitting} onChange={(e) => {
            setupi_id(e.target.value)
            console.log(e.target.value)
          }}>
          </textarea>
          <br />
          {count === 10 && <button className="border border-black bg-orange-300 rounded-md p-1 mt-2" type="submit" disabled={isSubmitting}>Submit</button>}
        </form>
        {confirmation && <div><button className="border border-black bg-orange-300 rounded-md p-1 mt-2"onClick={() => { save_pnr() }}>confirm</button>
        <p>click on confirm to sell the ticket</p></div>}
        {selling && <p>train with {pnrNo} has been saved and amount will be credted in a week of purchase</p>}
      </div>
    </div>
  )
}

export default Sell_ticket
