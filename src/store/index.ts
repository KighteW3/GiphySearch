import { configureStore } from "@reduxjs/toolkit";
import toggleMenuReducer from "./reducers/toggleMenu";
import apiAccesorReducer from "./reducers/apiAccesor";
import toggleStorageReducer from "./reducers/toggleSetStorage";
import fullView from "./reducers/fullView";

export const store = configureStore({
  reducer: {
    toggleMenu: toggleMenuReducer,
    apiAccesor: apiAccesorReducer,
    toggleSetStorage: toggleStorageReducer,
    fullView: fullView,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
