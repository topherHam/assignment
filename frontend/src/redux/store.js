/*import { configureStore } from "@reduxjs/toolkit";
import recipesReducer from "./recipes";
import authReducer from "./auth";
import signup from "./signup";

export const store = configureStore({
  reducer: {
    recipes: recipesReducer,
    auth: authReducer,
    signup: signup
  }
});

export const useAppDispatch = () => store.dispatch


*/

import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

import rootReducer from './reducers'

const initalState = {

}

const middleware = [thunk]

const store = createStore(rootReducer, initalState, composeWithDevTools(applyMiddleware(...middleware)))

export default store;