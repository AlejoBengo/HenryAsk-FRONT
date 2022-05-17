import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Report } from "../interface";
import axios from "axios";

interface InitialState {
  reports: Array<Report>;
}

const initialState: InitialState = {
  reports: [],
};

export const fetchGetAllReport = createAsyncThunk(
  "report/GetAllReport",
  async () => {
    const response = (await axios("/report")).data;
    return response;
  }
);

export const getReport = createSlice({
  name: "getAllReport",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGetAllReport.fulfilled, (state, action) => {
      state.reports = action.payload;
    });
  },
});

export default getReport.reducer;
