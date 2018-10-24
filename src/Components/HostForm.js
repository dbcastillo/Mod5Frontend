import React from 'react'

const HostForm = () => {
  return (
    <div className='container'>
      <form className="center brown lighten-5">
      <h1>Event Form</h1>
      <hr></hr>
      <hr></hr>
      <label><h4>Event Name:</h4></label>
        <input
          type="text area"
          className="center"
        />
      <label><h4>Event URL:</h4></label>
        <input
          type="text area"
          className="center"
        />
      <label><h4>Event Description:</h4></label>
          <input
            type="text area"
            className="center"
          />
        <label><h4>Event Location:</h4></label>
        <input
          type="text area"
          className="center"
        />
      <label><h4>Event Time Length:</h4></label>
          <input
            type="text area"
            className="center"
          />
      <label><h4>Whats Included:</h4></label>
          <input
            type="text area"
            className="center"
          />
        <label><h4>Group Size:</h4></label>
          <input
            type="text area"
            className="center"
          />
        <label><h4>Event Price:</h4></label>
          <input
            type="text area"
            className="center"
          />
        <label><h4>Event Host:</h4></label>
            <input
              type="text area"
              className="center"
            />
          <label><h4>Host Description:</h4></label>
          <input
            type="text area"
            className="center"
          />
        <br></br>
        <br></br>
        <br></br>
          <button type="submit">
            Submit
          </button>
      </form>
    </div>
  )
}

export default HostForm
