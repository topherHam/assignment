import { combineReducers } from 'redux'

import { authReducer } from './authReducer'
import { recipeReducer } from './recipesReducer'
import { signupReducer } from './signupReducer'

const appReducer = combineReducers({
  auth: authReducer,
  signup: signupReducer,
  recipes: recipeReducer
})

const rootReducer = (state, action) => {
  if (action.type === 'RESET_STORE') {
    return appReducer({}, action)
  }

  return appReducer(state, action)
}

export default rootReducer