import React from 'react'
import {connect} from 'react-redux'
import {gettingEvents} from '../Store/thunk'

class Events extends React.Component{


  componentDidMount() {
    this.props.getAllEvents()
  }
  render(){
    let event1 = this.props.eventcards.map(card =>
      <div key={card.id} id='single-event'>
        <h3>Event Name: {card.event_name}</h3>
        <br></br>
        <img src={card.image_url} className='card' alt=''/>
        <h5>Event Description: {card.event_description}</h5>
      </div>
    )
    return (
      <div className='container'>
        <h4 className='center'>Events</h4>
        {event1}
      </div>
    )

  }
}

const mapStateToProps = (state) => {
  return {
    eventcards: state.eventcards
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAllEvents: () => dispatch(gettingEvents())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Events)
