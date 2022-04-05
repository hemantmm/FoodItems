import React from 'react'
import logo from './images/image-avatar.png'
import './Navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
    <img src={logo} alt="" />
    <ul className='navUl'>
        <li>Home</li>
        <li>Restaurant</li>
        <li>About</li>
        <li>Contact</li>
    </ul>
    <div className='spans'>
    <button className='login'>Login</button>
    <button className='signUp'>Sign up</button>
    </div>
    </div>
  )
}

export default Navbar