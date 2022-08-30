import { combineReducers } from 'redux'

import { authReducer } from './authReducer'
import { recipeReducer } from './recipesReducer'
import { signupReducer } from './signupReducer'


export default combineReducers({
  auth: authReducer,
  signup: signupReducer,
  recipes: recipeReducer
})