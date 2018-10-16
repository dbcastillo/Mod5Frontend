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
        <img src={card.image_url} className='card' alt=''/>
        <h6>{card.event_name}</h6>
        <br></br>
        <br></br>
        <br></br>
      </div>
    )
    return (
      <div className='container'>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h4 className='left'>Events Im Hosting</h4>
        <br></br>
        <br></br>
        <br></br>
        <div className='left'>
          {event1}
        </div>
        <h4 className='right'>Events Im Attending</h4>
          <br></br>
          <br></br>
          <br></br>
          <div className='right'>
            {event1}
          </div>
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
