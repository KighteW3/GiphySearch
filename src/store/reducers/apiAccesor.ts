import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  keyname: "Panda",
  limit: 20,
  rating: "g",
  language: "es",
};

export const apiAccesorSlice = createSlice({
  name: "apiAccesor",
  initialState,
  reducers: {
    changeSearch: (state, action: PayloadAction<string>) => {
      state.keyname = action.payload;
      return state;
    },
    changeLimit: (state, action: PayloadAction<number>) => {
      state.limit = action.payload;
      return state;
    },
    changeRating: (state, action: PayloadAction<string>) => {
      state.rating = action.payload;
      return state;
    },
    changeLanguage: (state, action: PayloadAction<string>) => {
      state.language = action.payload;
      return state;
    },
  },
});

export default apiAccesorSlice.reducer;

export const { changeSearch, changeLimit, changeRating, changeLanguage } =
  apiAccesorSlice.actions;
