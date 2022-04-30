import axios from "axios";
import { Post } from "../interface";
export const postTemplate: Post = {
  _id: "",
  question: "",
  description: "",
  owner: "",
  createdAt: "",
  answers: [],
  type: "",
  tags: [],
};

export const getPostById = async (id: string | undefined) => {
  try {
    let post = await (await axios.get(`/post?id=${id}`)).data;

    return { ...postTemplate, ...post };
  } catch (error) {
    console.log(error);
    return postTemplate;
  }
};
