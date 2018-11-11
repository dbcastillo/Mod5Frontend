import {createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

let initialState = {
  eventcards: [],
  selectedEvent: {},
  loading: false,
  userIsLoggedIn: false,
  userInfo: {},
  error: false,
  errorMessage: ""
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'GET_EVENTS':
      return {...state, eventcards: action.payload}
    case 'LOGIN':
      return {...state, userIsLoggedIn: true, userInfo: action.payload}
    case 'LOGOUT':
      return {...state, userIsLoggedIn: false, currentUser: {}, host_events: [], user_events: []
      }
    case 'LOADING':
      return {...state, loading: true}
    case 'DONE_LOADING':
      return {...state, loading: false}
    case 'SELECTED_EVENT':
      return {...state, selectedEvent: action.payload}
    case 'SIGN_UP':
      return {...state, error: false, errorMessage: "", userInfo: action.payload, userIsLoggedIn: true}
    case 'ERROR':
      return {...state, error: true, errorMessage: action.payload}
    default:
      return state
  }
}

const store = createStore(reducer, applyMiddleware(thunk, logger))

export default store
