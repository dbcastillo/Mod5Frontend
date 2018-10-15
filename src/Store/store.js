import {createStore, applyMiddleware} from 'redux'
import {GET_EVENTS} from './actionType'
import logger from 'redux-logger'
import thunk from 'redux-thunk'


let initialState = {
  eventcards: [],
  events: []
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_EVENTS:
      return {...state, eventcards: action.payload}
    default:
      return state
  }
}

const store = createStore(reducer, applyMiddleware(thunk, logger))

export default store
