import axios from "axios";
import { User, Owner } from "../interface";
export const ownerTemplate: Owner = {
  _id: "",
  user_name: "",
  profile_picture: "",
  avatar:"",
  role: 0,
};
export const userTemplate: User = {
  _id: "",
  user_name: "",
  first_name: "",
  last_name: "",
  email: "",
  role: 0,
  country: "",
  city: "",
  type: "",
  profile_picture: "",
  banner: "",
  biography: "",
  isBanned:false,
  own_henry_coin: 5,
  give_henry_coin: 0,
  theoric: [],
  posts: [],
  answers: [],
  comments: [],
  excersices: [],
  github: "",
  linkedin: "",
  avatar:"",
  coffee: "",
  userCoin: [],
  createdAt: ""
};
export const getUserById = async (id: string) => {
  try {
    if (id === "") return userTemplate;
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
