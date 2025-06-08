import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
const Home = () => {
    const navigate=useNavigate();
    const sell_ticket=()=>{
        navigate('/sell_ticket')
    }
    function buy_ticket(){
        navigate('/buy_ticket');
    }
  return (
    <div>
      <button onClick={sell_ticket}>
        sell
      </button>
      <button onClick={buy_ticket}>
        buy
      </button>
    </div>
  )
}

export default Home
