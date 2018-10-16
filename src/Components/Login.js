import React from 'react'
import {connect} from 'react-redux'
import {loggingIn} from '../Store/thunk'

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleOnSubmit = (event) => {
    event.preventDefault()
    this.props.userLoggingIn(this.state)
  }

  render(){
    return(
      <div className='container brown lighten-5'>
        <form onSubmit={this.handleOnSubmit}>
          <h4>Login</h4>

          <div className="usernameDiv">
            <label className="usernameLabel">Username</label>
            <input
              type="text"
              name="username"
              className="inputArea"
              onChange={this.handleOnChange}
              value={this.state.username}
            />
          <label className="usernamePassword">Password</label>
            <input
              type="password"
              name="password"
              className="inputArea"
              onChange={this.handleOnChange}
              value={this.state.password}
            />
          </div>

          <div className="loginDiv">
            {this.props.userIsLoggedIn ? <p>Successfully Logged In!</p> : <p>{null}</p>}
            <button
              className="loginButton">
              Log In
            </button>
          </div>
        </form>
        <br></br>
        <br></br>
        <br></br>
        <button className="loginButton">
          Sign Up
        </button>
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
    userLoggingIn: (userInfo) =>  dispatch(loggingIn(userInfo))
    // getAllEvents: () => dispatch(gettingEvents())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
