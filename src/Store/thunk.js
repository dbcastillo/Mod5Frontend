import {GET_EVENTS, LOGIN, LOGOUT, LOADING, DONE_LOADING, SELECTED_EVENT, SIGN_UP, ERROR} from './actionType'

const gotEvents = (payload) => {
  return {
    type: GET_EVENTS,
    payload: payload
  }
}

const loggedIn = (payload) => {
  return {
    type: LOGIN,
    payload: payload
  }
}

export const loggedOut = (payload) => {
  return {
    type: LOGOUT,
    payload: payload
  }
}

const signedUp = (payload) => {
  return {
    type: SIGN_UP,
    payload: payload
  }
}

export const selectedEvent = (payload) => {
  return {
    type: SELECTED_EVENT,
    payload: payload
  }
}

const loading = () => {
  return {
    type: LOADING,
  }
}

const done_loading = () => {
  return {
    type: DONE_LOADING,
  }
}

const error = (payload) => {
  return {
    type: ERROR,
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

export const loggingIn = (userInfo) => {
  return (dispatch) => {
    dispatch(loggedIn(userInfo))
  }
}

export const signingUp = (userInfo) => {
  return (dispatch) => {
    console.log('this is in thunk/logginIn', userInfo);
    fetch('http://localhost:3000/users', {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        username: userInfo.username,
        password: userInfo.password
      })
    })
    .then(res=> res.json())
    .then(loginInfo => {
      if (loginInfo.username[0] !== "has already been taken") {
        return dispatch(signedUp(loginInfo))
      } else {
        return dispatch(error(loginInfo.username[0]))
      }
    })
    // }
  }
}
