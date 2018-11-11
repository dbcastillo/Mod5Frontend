import React from 'react'
import {connect} from 'react-redux'
import '../App.css';
import {NavLink} from 'react-router-dom'

class Events extends React.Component{

  render(){

    let filtered_cards = () => {
      if (this.props.userIsLoggedIn) {
        return this.props.eventcards.filter(card =>
          this.props.userInfo.events.map(event => event.id).find(
          id => id === card.id) !== card.id &&
          this.props.userInfo.host_events.map(event => event.id).find(
          id => id === card.id) !== card.id
        )
      } else {
        return this.props.eventcards
      }
    }

    let event1 = filtered_cards().map(card =>
      <NavLink to={"/" + card.event_name.split(" ").join("_")}>
        <div key={card.id} id='single-event'>
          <img
            src={card.image_url}
            className='card'
            alt=''
            height="230"
            width="230"/>
          <h6 className='eventName'>{card.event_name}</h6>
          <h6 className='eventName'>
            {card.guests.length} guest(s) attending</h6>
          <br></br>
          <br></br>
          <br></br>
        </div>
      </NavLink>
    )

    return (
      <div id='eventContainer' className= "div-wrapper brown lighten-5">
        <div>
          {event1}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    eventcards: state.eventcards,
    userIsLoggedIn: state.userIsLoggedIn,
    userInfo: state.userInfo
  }
}

export default connect(mapStateToProps)(Events)
