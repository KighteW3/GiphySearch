import { PayloadAction, createSlice } from "@reduxjs/toolkit";


export type toggleMenu = number;

const initialState = 0;

export const toggleMenuSlice = createSlice({
  name: "toggleMenu",
  initialState,
  reducers: {
    turnMenuOn: (state, action: PayloadAction<toggleMenu>) => {
      state = action.payload
      return state;
    }
  }
})

export default toggleMenuSlice.reducer;

export const {turnMenuOn} = toggleMenuSlice.actions;