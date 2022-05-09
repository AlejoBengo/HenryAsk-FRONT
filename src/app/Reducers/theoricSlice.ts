import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { Theoric } from "../interface";
import axios from "axios";
import { ownerTemplate } from "../Utils/userUtilities";

export const theoricTemplate: Theoric = {
  owner: ownerTemplate,
  title: "",
  content: "",
  author: "",
  images: [],
  comments: [],
};

interface InitialState {
  allTheorics: Array<Theoric>;
  oneTheoric: Theoric;
  willEdit: any;
}

const initialState: InitialState = {
  allTheorics: [],
  oneTheoric: theoricTemplate,
  willEdit: {},
};

export const fetchAllTheorics = async () => {
  try {
    const response = await (await axios(`/theoric`)).data;
    return response;
  } catch (err) {
    console.log(err);
  }
};

export const fetchAllTheoricss = createAsyncThunk(
  "user/fetchAllTheorics",
  async () => {
    try {
      const response = await (await axios(`/theoric`)).data;
      return response;
    } catch (err) {
      console.log(err);
    }
  }
);

export const fetchOneTheoric = async (id: string) => {
  try {
    const response = await (await axios(`/theoric/${id}`)).data;
    return response;
  } catch (err) {
    console.log(err);
  }
};

export const fetchOneTheorics = createAsyncThunk(
  "user/fetchOneTheorics",
  async (id: string) => {
    try {
      const response = await (await axios(`/theoric/${id}`)).data;
      return response;
    } catch (err) {
      console.log(err);
    }
  }
);

export const editTheoric = async (obj: any) => {
  try {
    await axios.put(`/theoric`, obj);
  } catch (err) {
    console.log(err);
  }
};

export const deleteTheoric = async (id: string) => {
  try {
    await axios.delete(`/theoric/?id=${id}`);
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
  },
  extraReducers: (builder) => {
    builder.addCase(fetchOneTheorics.fulfilled, (state, action) => {
      state.oneTheoric = action.payload;
    });
  },
});

export const { bringAllTheorics } = theoricSlice.actions;

export default theoricSlice.reducer;
