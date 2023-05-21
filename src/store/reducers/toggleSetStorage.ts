import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  toggleSetStorage: false
};

export const toggleStorageSlice = createSlice({
  name: "toggleSetStorage",
  initialState,
  reducers: {
    toggleSetStorage: (state, action: PayloadAction<boolean>) => {
      state.toggleSetStorage = action.payload;
      return state;
    }
  },
});

export default toggleStorageSlice.reducer;

export const { toggleSetStorage } =
  toggleStorageSlice.actions;
