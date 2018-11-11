import React from 'react'
import {NavLink, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {loggingIn} from '../Store/thunk'

class Account extends React.Component{

  render(){
    let host_events = this.props.userInfo.host_events.map(event =>
      <NavLink to={"/" + event.event_name.split(" ").join("_")}>
        <div key={event.id} id='single-event'>
          <img
            src={event.image_url}
            className='event' alt='' height="230" width="230"/>
          <h6 className='eventName'>{event.event_name}</h6>
          <br></br>
          <br></br>
          <br></br>
        </div>
      </NavLink>
    )

    let events = this.props.userInfo.events.map(event =>
      <NavLink to={"/" + event.event_name.split(" ").join("_")}>
        <div key={event.id} id='single-event'>
          <img
            src={event.image_url}
            className='event' alt='' height="230" width="230"/>
          <h6 className='eventName'>{event.event_name}</h6>
          <br></br>
          <br></br>
          <br></br>
        </div>
      </NavLink>
    )

    if (this.props.userIsLoggedIn) {
      return (
        <div id='eventcontainer' className='container brown lighten-5'>
          {this.props.userInfo ?
            <div id='eventContainer2'>
              <h2 className='center'>
                Welcome, {this.props.userInfo.user.username}!</h2>
              <h4 id='hosting'>Events you're hosting:</h4>
                {host_events}
              <h4 id='attending'>Events you're attending:</h4>
                {events}
            </div> : <p>loading</p>
          }
        </div>)
    } else {
       return <Redirect to='login'/>
    }
  }
}

const mapStateToProps = (state) => {
  return {
    eventcards: state.eventcards,
    userIsLoggedIn: state.userIsLoggedIn,
    userInfo: state.userInfo
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    userLoggingIn: (userInfo) =>  dispatch(loggingIn(userInfo))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Account)
