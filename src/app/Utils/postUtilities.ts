import axios from "axios";
import { Posts } from "../interface";
export const postTemplate: Posts = {
  _id: "",
  question: "",
  description: "",
  owner: "",
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
