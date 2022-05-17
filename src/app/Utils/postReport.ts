import axios from "axios";
import { User } from "../interface";
import { Posts } from "../interface";
import { Answer } from "../interface";
import { Comment } from "../interface";

export interface postReport {
  owner: User;
  description: string;
  status: string;
  reason: string;
  post: {} | Posts;
  answer: {} | Answer;
  comment: {} | Comment;
}

export const reportPost = async (report: postReport) => {
  const response = await axios.post(`/report`, report);
  return response.data;
};
