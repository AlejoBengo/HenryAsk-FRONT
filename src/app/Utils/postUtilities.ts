import axios from "axios";
import { Posts, Owner } from "../interface";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ownerTemplate } from "./userUtilities";

export const postTemplate: Posts = {
  _id: "",
  question: "",
  description: "",
  owner: ownerTemplate,
  ownerData: [],
  createdAt: "",
  open: true,
  answers: [],
  type: 0,
  tags: [],
};

export const getPostById = async (id: string | undefined) => {
  try {
    let post = await (await axios.get(`/post/${id}`)).data;
    return { ...postTemplate, ...post };
  } catch (error) {
    console.log(error);
    return postTemplate;
  }
};

export const postNewPost = createAsyncThunk(
  "post/fetchPostToSave",
  async (post: Posts) => {
    await axios.post(`/post`, post);
  }
);

export const editAnswerChildInPost = async (id: string | undefined) => {
  try {
    let post = await (await axios.get(`/post/${id}`)).data;
    return { ...postTemplate, ...post };
  } catch (error) {
    console.log(error);
    return postTemplate;
  }
};
