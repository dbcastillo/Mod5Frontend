import React from 'react'
import {connect} from 'react-redux'
import {signingUp} from '../Store/thunk'
import { Link } from 'react-router-dom'



class SignupForm extends React.Component {

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
    this.props.history.push("/account")
  }

  render(){
    return(
      <div className='center brown lighten-5'>
      <form onSubmit={this.handleOnSubmit}>
        <h1>Sign Up Here</h1>
          <br></br>
          <br></br>
          <br></br>
        <div className="form-group">
          <label className="control-label"><h4>Username</h4></label>
            <h5><input
              type="text"
              name="username"
              className="center"
              onChange={this.handleOnChange}
              value={this.state.username}
            /></h5>
        <label className="control-label"><h4>Password</h4></label>
          <h5><input
            type="password"
            name="password"
            className="center"
            onChange={this.handleOnChange}
            value={this.state.password}
          /></h5>
        <br></br>
        </div>
          <button type="submit"><h5>
              Sign Up
            </h5></button>
        <div className="form-group">
        </div>
      </form>
      <br></br>
      <br></br>
      <br></br>
      <h3><Link to="/Login">Already a User...Log In</Link></h3>
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    eventcards: state.eventcards,
    userIsLoggedIn: state.userIsLoggedIn,
    error: state.error,
    errorMessage: state.errorMessage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    userSigningUp: (userInfo) =>  dispatch(signingUp(userInfo))
    // getAllEvents: () => dispatch(gettingEvents())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignupForm)
