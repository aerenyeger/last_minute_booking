import React from 'react'
import { useState } from 'react'
import axios from 'axios';
const Sell_ticket = () => {
  const [pnrNo, setPnrNo] = useState(null);
  const [count, setcount] = useState(0);
  const [confirmation, setconfirmation] = useState(false);
  const [upi_id, setupi_id] = useState("");
  const[train_data,settrain_data]=useState([]);
  async function pnr_check(e) {
    e.preventDefault();
    try {
      const response = await axios.get(`/api/search_pnr`, {
        params: {
          pnr_no: pnrNo
        }
      })
      console.log(response.data)
      if (response.data.success === true) {
        setconfirmation(true)
        settrain_data(response.data);
      }
      console.log(response.data.success)
    }
    catch (error) {
      console.log("error while catchiing")
    }
  }

  // api call 
  async function save_pnr() {
    try {
      const response=await axios.post("/api/save_pnr", {
        pnrNo: pnrNo,
        upi_id: upi_id,
        startdate:train_data.data.dateOfJourney,
        journeyclass:train_data.data.journeyClass,
        price:train_data.data.ticketFare,
        sourceStation:train_data.data.sourceStation,
        reservationUpto:train_data.data.reservationUpto,
        train_no:train_data.data.trainNumber
      })
      console.log(train_data.data.dateOfJourney);
      console.log(train_data.data.journeyClass);
      if(response.status===200){
        console.log("pnr saved amount will be credited to the upi when the ticket is sold")
      }
    } catch (error) {
      console.log("error while saving the pnr")
    }
  }
  return (
    <div>
      <form action="" onSubmit={(e) => { pnr_check(e) }}>
        <h5>pnr no</h5>
        <textarea maxLength={10} rows={1} onChange={(e) => {
          setPnrNo(e.target.value); setcount(e.target.value.length)
          console.log(pnrNo)
        }}></textarea>
        <h5>upi id</h5>
        <textarea onChange={(e) => {
          setupi_id(e.target.value)
          console.log(e.target.value)
        }}>
        </textarea>
        {count === 10 && <button type="submit" >submit</button>}
      </form>
      {confirmation && <button onClick={() => { save_pnr() }}>confirm</button>}
    </div>
  )
}

export default Sell_ticket
