import { combineReducers, configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  userReducer,
  [postApi.reducerPath]: postApi.reducer,
});
export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(postApi.middleware),
  });
};
