import { combineReducers } from 'redux'
import { userInitialState, userReducer } from './user'

export const initialState = {
  user: userInitialState
}

export const reducer = combineReducers({
  user: userReducer
})