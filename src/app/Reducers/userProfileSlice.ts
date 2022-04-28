import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useAppSelector } from "../hooks";
import {User} from './userSlice';
import axios from "axios";

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
  
  export const getUserName = createSlice({
    name: "getUser",
    initialState,
    reducers: {
      getUser: (state,action: PayloadAction<string>) => {
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
  
  export const {getUser} = getUserName.actions;
  export default getUserName.reducer;