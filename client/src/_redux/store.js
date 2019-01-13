import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import promiseMiddleware from './../_services/promise-middleware';

import rootReducer from './reducers/RootReducer.js'

const createStoreWithMiddleware = 
  applyMiddleware(
    thunk,
    promiseMiddleware
  )(createStore)

  export default () => createStoreWithMiddleware(rootReducer)