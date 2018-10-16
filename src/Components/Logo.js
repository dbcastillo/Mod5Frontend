import React from 'react'
import {NavLink} from 'react-router-dom'


const Logo = () => {
  return (

    <div className='logo-container'>
      <h4 className='center' id='joinMe'>Join-Me</h4>
      <h6 className='center' id='connectingPeople'>Connecting people through unique experiences</h6>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div class='center-align'>
        <NavLink to="/events">
          <button class='btn-large brown darken-3'>
          See Events
          </button>
        </NavLink>
      </div>
      <br></br>
      <div class='center-align'>
        <NavLink to="/hostForm">
          <button class='btn-large brown darken-3'>
            Host Event
          </button>
        </NavLink>
      </div>
    </div>
  )
}

export default Logo
