import { Comment } from "../interface";
import { ownerTemplate } from "./userUtilities";
import axios from "axios";
export const commentTemplate: Comment = {
  _id: "",
  answer: "",
  content: "",
  owner: ownerTemplate,
};

export const getCommentsByAnswerID = async (id: string | undefined) => {
  try {
    if (!id) {
      return [];
    }
    return await (
      await axios.get(`/comment?answerId=${id}`)
    ).data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const createComment = async (comment: Comment) => {
  try {
    let aux = { ...comment, owner: comment.owner._id };
    return await (
      await axios.post("/comment", aux)
    ).data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteComment = async (id: string) => {
  try {
    await axios.delete(`/comment/?id=${id}`);
  } catch (error) {
    console.log(error);
  }
};
