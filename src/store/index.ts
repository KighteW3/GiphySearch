import {configureStore} from '@reduxjs/toolkit'
import toggleMenuReducer from './reducers/toggleMenu'
import apiAccesorReducer from './reducers/apiAccesor';

export const store = configureStore({
  reducer: {
    toggleMenu: toggleMenuReducer,
    apiAccesor: apiAccesorReducer
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;