import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Posts } from "../interface";
import axios from "axios";

interface InitialState {
  posts: Array<Posts>;
}

const initialState: InitialState = {
  posts: [],
};

export const fetchGetAllPosts = createAsyncThunk(
  "post/GetAllPosts",
  async (type: 0 | 1 | 2 | 10) => {
    // new
    if (type === 10) {
      const response = (await axios.get(`/post`)).data;
      return response;
    } else {
      const response = (await axios.get(`/post?type=${type}`)).data;
      return response;
    }
  }
);

export const getPosts = createSlice({
  name: "getAllPosts",
  initialState,
  reducers: {
    getAllPosts: (state) => {
      state.posts = initialState.posts;
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
