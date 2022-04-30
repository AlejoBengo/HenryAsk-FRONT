import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { useAppSelector } from "../hooks";
import { User, Posts } from "../interface";
import axios from "axios";

interface InitialState {
  posts:Array<Posts>,
}

const initialState: InitialState = {
    posts:[],
};

export const fetchGetAllPosts = createAsyncThunk(
  'post/GetAllPosts',
  async (type:0|1|2) => { // new
    const response =(await axios.get(`/post?type=${type}`)).data;
    return response;
  }
);

export const getPosts = createSlice({
  name: "getAllPosts",
  initialState,
  reducers: {
    getAllPosts: (state) => {
        state.posts = initialState.posts
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchGetAllPosts.fulfilled, (state, action) => {
      state.posts = action.payload;
    });
  },
});

export const { getAllPosts } = getPosts.actions;

export default getPosts.reducer;
