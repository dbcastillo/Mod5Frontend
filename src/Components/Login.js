import React from 'react'
import {connect} from 'react-redux'
import {loggingIn} from '../Store/thunk'
import {Link, Redirect} from 'react-router-dom'
import UserAdapter from '../Adapters/UserAdapter'

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    }
  }

  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleOnSubmit = (event) => {
    event.preventDefault()
    UserAdapter.login(this.state)
    .then(data => {
      this.props.userLoggingIn(data)
    })
  }

  render(){
    if (this.props.userIsLoggedIn) {
      return <Redirect to='/account'/>
    } else {
        return(
          <div className='container center brown lighten-5'>
            <form onSubmit={this.handleOnSubmit}>
              <h1>Login</h1>
              <br></br>
              <br></br>
              <br></br>
              <div className="usernameDiv">
                <label><h4>Username</h4></label>
                <h5><input
                  type="text"
                  name="username"
                  className="center"
                  onChange={this.handleOnChange}
                  value={this.state.username}
                /></h5>
              <label><h4>Password</h4></label>
                <h5><input
                  type="password"
                  name="password"
                  className="center"
                  onChange={this.handleOnChange}
                  value={this.state.password}
                /></h5>
              </div>
              <br></br>
              <div className="loginDiv">
                <button
                  type="submit"
                  className="loginButton"><h5>
                  Log In
                </h5></button>
              <br></br>
              <br></br>
              <br></br>
                <h3>
                  <Link to="/SignupPage">New User...Sign Up</Link>
                </h3>
              </div>
            </form>
            <br></br>
            <br></br>
            <br></br>
        </div>
      )
    }
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
