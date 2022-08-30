import { configureStore } from "@reduxjs/toolkit";
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


