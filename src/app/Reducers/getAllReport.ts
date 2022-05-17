import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { useAppSelector } from "../hooks";
import { User, Posts, Answer, Comment , Report} from "../interface";
import axios from "axios";


interface InitialState {
  reports:Array<Report>;
}

const initialState: InitialState = {
    reports:[],
};

export const fetchGetAllReport = createAsyncThunk(
  'report/GetAllReport',
  async () => {
    const response = (await axios('/report')).data;
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

//export const { getPendingReports } = getReport.actions;

export default getReport.reducer;
