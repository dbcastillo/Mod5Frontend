import React, { Component } from 'react';
import Navbar from './Components/Navbar'
import {BrowserRouter, Route} from 'react-router-dom'
import Logo from './Components/Logo'
import About from './Components/About'
import Login from './Components/Login'
import Account from './Components/Account'
import Events from './Components/Events'
import SignupPage from './Components/SignupPage'
import HostForm from './Components/HostForm'
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Route path='/homepage' component={Logo}/>
          <Route path='/about' component={About}/>
          <Route path='/login' component={Login}/>
          <Route path='/account' component={Account}/>
          <Route path='/events' component={Events}/>
          <Route path='/SignupPage' component={SignupPage}/>
          <Route path='/hostForm' component={HostForm}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App
