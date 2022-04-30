import { createAsyncThunk } from "@reduxjs/toolkit";
import { Posts } from "../interface";
import axios from "axios";

export const fetchPostToSave = createAsyncThunk(
  "post/fetchPostToSave",
  async (post: Posts) => {
    await axios.post(`/post`, post);
  }
);
