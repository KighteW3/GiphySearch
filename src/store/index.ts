import {configureStore} from '@reduxjs/toolkit'
import toggleMenuReducer from './reducers/toggleMenu'

export const store = configureStore({
  reducer: {
    toggleMenu: toggleMenuReducer
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;