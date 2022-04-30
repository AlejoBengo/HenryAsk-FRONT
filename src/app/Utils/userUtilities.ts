import axios from "axios";
import { User } from "../interface";
export const userTemplate: User = {
  _id: "",
  user_name: "",
  first_name: "",
  last_name: "",
  email: "",
  role: 0,
  country: "",
  city: "",
  type:"",
  profile_picture: "",
  biography: "",
  own_henry_coin: 0,
  give_henry_coin: 0,
  theoric: [],
  posts: [],
  answers: [],
  comments: [],
  excersices: [],
  github: "",
  linkedin: "",
};
export const getUserById = async (id: string) => {
  try {
    let user = await (await axios.get(`/user/${id}`)).data;
    if (user.user_name === "") {
      return userTemplate;
    }

    return user;
  } catch (error) {
    console.log(error);
    return userTemplate;
  }
};
