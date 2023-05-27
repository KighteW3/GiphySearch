import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type storageItems = string | null;

const keyname: storageItems = localStorage.getItem("keyname");
const limit: storageItems = localStorage.getItem("limit");
const rating: storageItems = localStorage.getItem("rating");
const language: storageItems = localStorage.getItem("language");

const initialState = {
  keyname: keyname ? keyname : "Panda",
  limit: limit ? limit : 20,
  rating: rating ? rating : "pg-13",
  language: language ? language : "es",
};

export const apiAccesorSlice = createSlice({
  name: "apiAccesor",
  initialState,
  reducers: {
    changeSearch: (state, action: PayloadAction<string>) => {
      state.keyname = action.payload;
      localStorage.setItem("keyname", action.payload.toString());
      return state;
    },
    changeLimit: (state, action: PayloadAction<number>) => {
      state.limit = action.payload;
      localStorage.setItem("limit", action.payload.toString());
      return state;
    },
    changeRating: (state, action: PayloadAction<string>) => {
      state.rating = action.payload;
      localStorage.setItem("rating", action.payload.toString());
      return state;
    },
    changeLanguage: (state, action: PayloadAction<string>) => {
      state.language = action.payload;
      localStorage.setItem("language", action.payload.toString());
      return state;
    },
  },
});

export default apiAccesorSlice.reducer;

export const { changeSearch, changeLimit, changeRating, changeLanguage } =
  apiAccesorSlice.actions;
