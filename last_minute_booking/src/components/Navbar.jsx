import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div >
      <nav >
        <ul className='bg-gradient-to-r from-cyan-400 to-blue-500 px-2 py-1'>
            <li className='inline-block px-2'><Link to="/">home</Link></li>
            <li className='inline-block px-3'><Link to="/developer-desk">developerDesk</Link></li>
            <li className='inline-block'> <Link to="/terms">terms</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
