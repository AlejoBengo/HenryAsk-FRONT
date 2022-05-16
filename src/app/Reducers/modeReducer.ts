import { createSlice } from "@reduxjs/toolkit";
import { PaletteMode } from "@mui/material";

interface InitialState {
  mode: PaletteMode;
}

const initialState: InitialState = {
  mode: "light",
};

export const modeSlice = createSlice({
  initialState,
  name: "mode",
  reducers: {
    toggleMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
      return state;
    },
    setMode: (state, action) => {
      state.mode = action.payload;
      return state;
    },
  },
});

export const { toggleMode,setMode } = modeSlice.actions;
export default modeSlice.reducer;
