import React, { useState } from 'react'
import axios from 'axios';
const Train_no = () => {
  const [train_number, settrain_number] = useState('');
  async function search_train(e) {
    e.preventDefault();
    try {
      const response = await axios.get("/api/train_no/", {
        params: {
          trainNumber: train_number, // ✅ matches backend
        }
      });
    } catch (error) {
      console.log("error while fetching")
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
    </div>
  )
}

export default Train_no
