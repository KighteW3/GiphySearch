import { Middleware, configureStore } from "@reduxjs/toolkit";
import toggleMenuReducer from "./reducers/toggleMenu";
import apiAccesorReducer, {
  changeLanguage,
  changeLimit,
  changeRating,
  changeSearch,
} from "./reducers/apiAccesor";
import toggleStorageReducer from "./reducers/toggleSetStorage";

const getPreviousState: Middleware = (store) => (next) => (action) => {
  const previousLanguage: any = localStorage.getItem("language");
  const previousLimit: any = localStorage.getItem("limit");
  const previousRating: any = localStorage.getItem("rating");

  next(action);

  const a = setTimeout(() => {
    store.dispatch(changeLanguage(previousLanguage));
    store.dispatch(changeLimit(previousLimit));
    store.dispatch(changeRating(previousRating));
    clearInterval(a);
  }, 1000);
};

export const store = configureStore({
  reducer: {
    toggleMenu: toggleMenuReducer,
    apiAccesor: apiAccesorReducer,
    toggleSetStorage: toggleStorageReducer,
  },
  middleware: [getPreviousState],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
