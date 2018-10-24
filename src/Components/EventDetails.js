import React from 'react'
import {connect} from 'react-redux'
import { selectedEvent } from '../Store/thunk'
import {NavLink} from 'react-router-dom'



class EventDetails extends React.Component{

  componentDidMount() {
    this.props.selectedEvent()
  }

  render(){
    console.log('in event details', this.props)

    return(
      <article>
        {this.props.event ?
          <div className= 'center brown lighten-5'>
            <h1>{this.props.event.event_name}</h1>
            <br></br>
            <br></br>
            <img src={this.props.event.image_url} class='card-large' alt=''></img>
            <br></br>
            <h3>{this.props.event.event_description}</h3>
            <h5>Location: {this.props.event.location}</h5>
            <h5>Time Length: {this.props.event.time_length}</h5>
            <h5>What is Included: {this.props.event.whats_included}</h5>
            <h5>There are {this.props.event.group_size-this.props.event.guests.length} open spots for this experience</h5>
            <h5>Price: ${this.props.event.price}</h5>
            <hr></hr>
            <hr></hr>
            <h3>{this.props.event.host_name} will be your host!</h3>
            <h5>About {this.props.event.host_name}: {this.props.event.host_description}</h5>
            <br></br>
            {
              this.props.userIsLoggedIn ?
            <NavLink to= "/guest_form">
            <button className="btn-floating btn-large pulse brown">
              Attend Event
            </button>
            </NavLink> : <NavLink to= "/login">
            <button className="btn-floating btn-large pulse brown">
              Attend Event
            </button>
            </NavLink>
            }
          </div> : <p>loading</p>}
      </article>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    selectedEvent: state.selectedEvent,
    userIsLoggedIn: state.userIsLoggedIn
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectedEvent: () => dispatch(selectedEvent())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(EventDetails)
