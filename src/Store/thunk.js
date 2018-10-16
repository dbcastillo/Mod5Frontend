import {GET_EVENTS, LOGIN, LOADING, DONE_LOADING} from './actionType'

const gotEvents = (payload) => {
  return {
    type: GET_EVENTS,
    payload: payload
  }
}

const loggedIn = (payload) => {
  console.log('im in logged in', payload);
  return {
    type: LOGIN,
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
    console.log('this is in thunk', userInfo);
    dispatch(loading())
    fetch('http://localhost:3000/users', {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        username: userInfo.username,
        password: userInfo.password
      })
    })
    .then(res=> res.json())
    .then(loginInfo =>
      dispatch(loggedIn(loginInfo))
      )
    // }
    dispatch(done_loading())
  }
}
