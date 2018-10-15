import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
  return(
    <div class="navbar-fixed">
      <nav className="nav-wrapper blue">
        <div className='container'>
          <NavLink to="/logo"><img src="https://thumb.ibb.co/mrDN5f/Join-Me-Logo.png" alt="imageUrl"></img></NavLink>
          <ul id='nav-mobile' class="left">
            <li class="active"><NavLink to= "/about">About</NavLink></li>
            <li class="active"><NavLink to= "/login">Login</NavLink></li>
            <li class="active"><NavLink to= "/account">Account</NavLink></li>
            <li class="active"><NavLink to= "/events">Events</NavLink></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
