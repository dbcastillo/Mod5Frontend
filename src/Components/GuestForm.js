import React from 'react'

const GuestForm = () => {
  return (
    <div className='container'>
      <form className="center brown lighten-5">
      <h1>Attend Event Form</h1>
      <hr></hr>
      <hr></hr>
      <label><h4>Payment Method:</h4></label>
        <input
          type="text area"
          className="center"
        />
      <label><h4>Preferred Contact Info:</h4></label>
        <input
          type="text area"
          className="center"
        />
      <label><h4>Any Important Notes:</h4></label>
          <input
            type="text area"
            className="center large"
          />
      <br></br>
      <br></br>
      <button type="submit">
        Submit
      </button>
        <br></br>
        <br></br>
        <br></br>
      </form>
    </div>
  )
}

export default GuestForm
