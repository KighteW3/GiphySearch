import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type payloadType = boolean;

const initialState = {
  toggleSetStorage: false
};

export const toggleStorageSlice = createSlice({
  name: "toggleSetStorage",
  initialState,
  reducers: {
    toggleSetStorage: (state, action: PayloadAction<payloadType>) => {
      state.toggleSetStorage = action.payload;
      console.log(action.payload)
      return state;
    }
  },
});

export default toggleStorageSlice.reducer;

export const { toggleSetStorage } =
  toggleStorageSlice.actions;
