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
    <div>
      <button onClick={navigate_to_path}>
        path
      </button>
      <button onClick={navigate_to_Train_no}>
        train_number
      </button>
    </div>
  )
}

export default Buy_ticket
