import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  showFullView: "none",
  src: "",
};

const fullViewSlice = createSlice({
  name: "fullView",
  initialState: initialState,
  reducers: {
    toggleFullView: (state, action: PayloadAction<string>) => {
      state.showFullView = action.payload;
      return state;
    },
    changeSource: (state, action: PayloadAction<string>) => {
      state.src = action.payload;
      return state;
    },
  },
});

export default fullViewSlice.reducer;

export const { toggleFullView, changeSource } = fullViewSlice.actions;
