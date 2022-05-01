import axios from "axios";
import { Answer } from "../interface";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const answerTemplate: Answer = {
  owner: "",
  content: "",
  posts: "",
};

export const postNewAnswer = createAsyncThunk(
  "post/fetchAnswerToSave",
  async (answer: Answer) => {
    await axios.post(`/answer`, answer);
  }
);
