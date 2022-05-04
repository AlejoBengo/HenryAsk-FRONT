import axios from "axios";
import { Posts, PostOwner } from "../interface";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const postOwnerTemplate: PostOwner = {
  _id: "",
  user_name: "",
  profile_picture: "",
  role: 0,
};
export const postTemplate: Posts = {
  _id: "",
  question: "",
  description: "",
  owner: postOwnerTemplate,
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
