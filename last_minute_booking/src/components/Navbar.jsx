import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <nav>
        <ul>
            <li><Link to="/">home</Link></li>
            <li><Link to="/developer-desk">developer-desk</Link></li>
            <li><Link to="/terms">terms</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
