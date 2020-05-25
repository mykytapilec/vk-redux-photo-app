import { createStore, applyMiddleware } from 'redux'
import { rootReducers } from '../reducers'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';

export const store = createStore(rootReducers, composeWithDevTools(
    applyMiddleware(thunk, logger)
))