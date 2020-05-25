import { combineReducers } from 'redux'
import { pageReducer } from './page'
import { userReducer } from './user'

export const rootReducers = combineReducers ({
    page: pageReducer,
    user: userReducer,
})