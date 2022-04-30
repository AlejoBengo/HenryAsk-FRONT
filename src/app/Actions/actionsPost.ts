import { createAsyncThunk } from "@reduxjs/toolkit";
import { Post } from "../interface";
import axios from "axios";

export const fetchPostToSave = createAsyncThunk(
  "post/fetchPostToSave",
  async (post: Post) => {
    await axios.post(`/post`, post);
  }
);
