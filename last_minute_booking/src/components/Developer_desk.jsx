import React from 'react'

const Developer_desk = () => {
  return (
    <div className='bg-black text-white min-h-screen'>
      <div >
      <div className='w-full '>
        <h1 className='text-4xl font-bold  '>MOHIT AGGARWAL</h1>
        <p>EMAIL:aggarwalmohit9205@gmail.com Phone:9205822816</p>
      </div>
      <div className='w-10 h-1 bg-green-400 ml-4 mt-4 rounded-md'></div>
      <div>
        <br />
        <h3>
          I am currently pursuing Btech from IIIT Bhopal. i am  open to work for any role to gain experirence. i am hardworking and quick learner
        </h3>
      </div>
      <div className='w-10 h-1 bg-green-400 ml-4 mt-4 rounded-md'></div>
      <br />
      <div>
        <h1>Last Minute Booking</h1>
        <p>a one stop destination for buying and selling of ticket.</p>
      </div>
      <div className='w-10 h-1 bg-green-400 ml-4 mt-4 rounded-md'></div>
      <br />
      <div>
        <h1> My other Projects</h1>
        <p><a href="https://attendance-tracker-3uiu.onrender.com">Attendance Tracker</a></p>
        <p>MERN Stack</p>
        <p>attendance tracking app. allows user to login. uses mongodb to store the users attendance info. user can edit update and delete their Subject.</p>
      </div>
      <div className='w-10 h-1 bg-green-400 ml-4 mt-4 rounded-md'></div>
      <br />
      <div><a href="https://frontend-chat-app-ipcs.onrender.com">Chat App</a></div>
      <h2>MERN Stack</h2>
      <p>a chat app which allows user to safely login.Password is hashed before saving in the Database. person can chat to the person in real time.manages state using zustand a two way connection is established using web
        Socket.io. a simle userinterface for easy messaging and reading.
      </p>
    </div>
    </div>
  )
}

export default Developer_desk
