import {GET_EVENTS} from './actionType'

const gotEvents = (payload) => {
  return {
    type: GET_EVENTS,
    payload: payload
  }
}

export const gettingEvents = () => {
  return (dispatch) => {
    fetch('http://localhost:3000/events')
    .then(res=> res.json())
    .then(AllEvents =>
      dispatch(gotEvents(AllEvents))
    )
  }
}
