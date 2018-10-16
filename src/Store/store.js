import {createStore, applyMiddleware} from 'redux'
import {GET_EVENTS, LOGIN, LOADING, DONE_LOADING} from './actionType'
import logger from 'redux-logger'
import thunk from 'redux-thunk'


let initialState = {
  eventcards: [],
  events: [],
  loading: false,
  userIsLoggedIn: false,
  userInfo: {}
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_EVENTS:
      return {...state, eventcards: action.payload}
    case LOGIN:
      return {...state, userIsLoggedIn: true, userInfo: action.payload}
    case LOADING:
      return {...state, loading: true}
    case DONE_LOADING:
      return {...state, loading: false}
    default:
      return state
  }
}

const store = createStore(reducer, applyMiddleware(thunk, logger))

export default store
