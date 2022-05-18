import axios from "axios";
import { Posts } from "../interface";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ownerTemplate } from "./userUtilities";

export const postTemplate: Posts = {
  _id: "",
  question: "",
  description: "",
  owner: ownerTemplate,
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
    let info = await axios.post(`/post`, post);
    return info.data;
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

export const editPost = async (obj: any) => {
  try {
    axios.put(`/post`, obj);
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = async (id: string) => {
  try {
    await axios.delete(`/post/?id=${id}`);
  } catch (error) {
    console.log(error);
  }
};
export const closePost = async (id: string | undefined) => {
  try {
    return await (
      await axios.put("/post", { id, open: false })
    ).data;
  } catch (error) {
    return error;
  }
};
