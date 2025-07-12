import React from 'react'

const Terms = () => {
  return (
    <div className='bg-black pl-4 h-[calc(100vh-33px)] border border-white overflow-hidden'>
      <div className='pt-5 '>
        <h1 className='text-5xl font-bold w-full mx-100 text-white'>Welcome To Last Minute Booking</h1>
      </div>
      <div className='w-10 h-1 bg-green-400 ml-4 mt-4 rounded-md'></div>
      <div className='text-white pt-5'>
        <h1 className='text-3xl font-bold pt-2 pl-3'>Guidelines for Selling...</h1>
        <ul className='text-2xl'>
          <li>Ticket once sold cannot be cancelled.</li>
          <li>After Selling the ticket the user has no right on the ticket.</li>
          <li>User cannot board the ticket with the given pnrnumber.</li>
          <li>At the time of selling the ticket, the user must enter a valid UPI Id.</li>
          <li>If the ticket is sold, the amount will be credited to user within one week.</li>
        </ul>
      </div>
      <div className='w-10 h-1 bg-green-400 ml-4 mt-4 rounded-md'></div>
      <div className='text-white pt-6'>
        <h1 className=' text-3xl font-bold pt-2 pl-3'>Guidelines for Buying</h1>
        <ul className='text-2xl '>
          <li>User can search by Train Number or Path</li>
          <li>available tickets will be shown.</li>
          <li>after succesfull payment user is directed to page where user can see the PNR Number.</li>
        </ul>
      </div>
    </div>
  )
}

export default Terms
