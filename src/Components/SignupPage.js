import React from 'react'
import SignupForm from './SignupForm'

class SignupPage extends React.Component {


  render(){
    console.log(this.props.history);
    return(
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <SignupForm history={this.props.history}/>
        </div>
      </div>
    )
  }
}

export default SignupPage
