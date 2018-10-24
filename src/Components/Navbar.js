import React from 'react'
import {NavLink} from 'react-router-dom'
import '../App.css';
import {connect} from 'react-redux'
import {loggedOut} from '../Store/thunk'

class Navbar extends React.Component{

  render(){
    console.log(this.props);
  return(
    <div className="navbar-fixed">
      <nav id="navbarnav" className="nav-wrapper brown lighten-5">
        <div id='navigationbar' className="">
        <ul id='nav-mobile' className="">
          <li className="navLi"><NavLink to= "/about"><h5 id='h5'>About</h5></NavLink></li>

          <li className="NavLi">
            {
              this.props.userIsLoggedIn ? <NavLink to= "/account"><h5 id='h5' >My-Account</h5></NavLink> : <NavLink to= "/login"><h5 id='h5'>My-Account</h5></NavLink>
            }
          </li>

        </ul>
        <NavLink to="/homepage"><img src="https://image.ibb.co/no1hFf/noun-shake-hand-1546237.png" alt="imageUrl"
          id="navImage"
          width="90"></img></NavLink>
        <ul id='nav-mobile2' className="">
          <li className="navLi"><NavLink
            to= "/events"><h5 id='h5'>Events</h5></NavLink></li>

        <li className="navLi">
          {
            this.props.userIsLoggedIn ? <NavLink to= "/homepage"><h5 id='h5' onClick={this.props.userLoggedOut}>Logout</h5></NavLink> : <NavLink to= "/login"><h5 id='h5'className="right-align">Login</h5></NavLink>
          }
        </li>

        </ul>
        </div>
      </nav>
    </div>
  )
  }
}

const mapStateToProps = (state) => {
  return {
    eventcards: state.eventcards,
    userIsLoggedIn: state.userIsLoggedIn
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    userLoggedOut: () => dispatch(loggedOut())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
