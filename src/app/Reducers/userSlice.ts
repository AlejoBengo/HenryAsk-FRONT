import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useAppSelector } from "../hooks";
import axios from "axios";

export interface User {
  first_name: string;
  last_name: string;
  email: string;
  country: string;
  city: string;
  role: number;
  user_name: string;
  profile_picture: string;
  biography: string;
  password: string;
  posts: Array<string>;
  answers: Array<string>;
  comments: Array<string>;
  own_henry_coin: number;
  give_henry_coin: number;
  theoric: Array<string>;
  excersices: Array<string>;
}

const initialState: User = {
  first_name: "",
  last_name: "",
  email: "",
  country: "",
  city: "",
  role: 0,
  user_name: "",
  profile_picture: "",
  biography: "",
  password: "",
  posts: [],
  answers: [],
  comments: [],
  own_henry_coin: 0,
  give_henry_coin: 0,
  theoric: [],
  excersices: [],
};
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<string>) => {
      let id = action.payload;
      axios
        .get(`/users/${id}`)
        .then((res) => res.data)
        .then((data) => {
          state = data;
        })
        .catch((e) => console.log(e));
    },
  },
});







export const { setUser } = userSlice.actions;
export default userSlice.reducer;
