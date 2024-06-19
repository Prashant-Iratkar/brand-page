import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <div>
      <nav>
        <div className='logo'>
          <img src='/images/addidas.png' alt='logo'></img>
        </div>
        <ul>
          <li href='#'>Menue</li>
          <li href='#'>Location</li>
          <li href='#'>About</li>
          <li href='#'>Contact</li>
        </ul>
        <button>login</button>
      </nav>
    </div>
  )
}

export default Navbar;
