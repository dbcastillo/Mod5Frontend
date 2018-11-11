import React from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'


class Logo extends React.Component{

  render(){
    return (

      <div className='logo-container'>
        <h4 className='center' id='joinMe'>Join-Me</h4>
        <h6
          className='center'
          id='connectingPeople'>
          Connecting people through unique experiences
        </h6>
        <br></br>
        <br></br>
        <div id='see-events' className='left'>
          <NavLink to="/events">
            <button id='button' className='btn-large brown darken-3'>
            See Events
            </button>
          </NavLink>
        </div>
        <div id='host-event' className='right'>
          {this.props.userIsLoggedIn ?
          <NavLink to="/hostForm">
            <button id= 'button' className='btn-large brown darken-3'>
              Host Event
            </button>
          </NavLink> : <NavLink to="/login">
            <button id= 'button' className='btn-large brown darken-3'>
              Host Event
            </button>
          </NavLink>
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    selectedEvent: state.selectedEvent,
    userIsLoggedIn: state.userIsLoggedIn
  }
}

export default connect(mapStateToProps)(Logo)
