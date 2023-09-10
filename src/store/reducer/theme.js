import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "selectedTheme",
  initialState: localStorage.getItem("theme")?localStorage.getItem("theme"):"light",
  reducers: {
    UPDATETHEME(state,{payload}){
        return payload
    }
  },
});

export const { UPDATETHEME } =themeSlice.actions;

export default themeSlice.reducer;
