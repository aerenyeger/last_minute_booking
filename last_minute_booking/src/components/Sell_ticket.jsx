import React from 'react'
import { useState } from 'react'
import axios from 'axios';
const Sell_ticket = () => {
    const [pnrNo,setPnrNo]=useState(null);
    const[count,setcount]=useState(0);
    async function pnr_check(e){
      e.preventDefault();
      try {
        const response=await axios.get(`/api/search_pnr`,{params:{
          pnr_no:pnrNo
        }})
        console.log(response.data)
      } 
      catch (error) {
        console.log("error while catchiing")
      }
    }
  return (
    <div>
      <form action="" onSubmit={(e)=>{pnr_check(e)}}>
        <textarea maxLength={10} rows={1} onChange={(e)=>{setPnrNo(e.target.value);setcount(e.target.value.length)
          console.log(pnrNo)
        }}></textarea>
        {count===10 && <button type="submit" >submit</button>}
      </form>
    </div>
  )
}

export default Sell_ticket
