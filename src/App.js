import React, { Component } from 'react';
import Navbar from './Components/Navbar'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Logo from './Components/Logo'
import About from './Components/About'
import Login from './Components/Login'
import Account from './Components/Account'
import Events from './Components/Events'
import SignupPage from './Components/SignupPage'
import HostForm from './Components/HostForm'
import GuestForm from './Components/GuestForm'
import EventDetails from './Components/EventDetails'
import './App.css';
import {connect} from 'react-redux'


class App extends Component {

  constructor(props) {
    super(props)
    this.renderEvent = this.renderEvent.bind(this)
  }

  renderEvent(renderProps){
    console.log('in app js', renderProps);
    const singleEvent = this.props.eventcards.find((event) =>
     event.event_name.split(" ").join("_") === renderProps.match.params.slug)
    // // console.log(renderProps.match.params.slug);
    return <EventDetails event={singleEvent}/>
  }



  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Switch>
          <Route exact path='/homepage' component={Logo}/>
          <Route exact path='/about' component={About}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/account' component={Account}/>
          <Route exact path='/events' component={Events}/>
          <Route exact path='/SignupPage' component={SignupPage}/>
          <Route exact path='/hostForm' component={HostForm}/>
          <Route exact path='/guest_form' component={GuestForm}/>
          <Route exact path='/:slug' render={this.renderEvent}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    eventcards: state.eventcards
  }
}

export default connect(mapStateToProps)(App)
