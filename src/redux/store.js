import { combineReducers, configureStore } from "@reduxjs/toolkit";
import PostsReducer from "./slice";

const rootReducer = combineReducers({
  PostsReducer,
});
export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};
