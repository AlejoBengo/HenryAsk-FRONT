import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { Theoric } from "../interface";
import axios from "axios";

export const theoricTemplate: Theoric = {
  owner: "",
  title: "",
  content: "",
  author: "",
  images: [],
  comments: [],
};

interface InitialState {
  allTheorics: Array<Theoric>;
  oneTheoric: Theoric;
}

const initialState: InitialState = {
  allTheorics: [],
  oneTheoric: theoricTemplate,
};

export const fetchAllTheorics = async () => {
  try {
    const response = await (await axios(`/theoric`)).data;
    return response;
  } catch (err) {
    console.log(err);
  }
};

export const fetchOneTheoric = async (id: string) => {
  try {
    const response = await (await axios(`/theoric/${id}`)).data;
    return response;
  } catch (err) {
    console.log(err);
  }
};

export const theoricSlice = createSlice({
  name: "theoric",
  initialState,
  reducers: {
    bringAllTheorics: (state) => {
      state.allTheorics = initialState.allTheorics;
    },
    bringTheoricById: (state) => {
      state.oneTheoric = initialState.oneTheoric;
    },
  },
});

export const { bringAllTheorics, bringTheoricById } = theoricSlice.actions;

export default theoricSlice.reducer;
