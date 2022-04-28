import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { useAppSelector } from "../hooks";
import { User } from "../interface";
import axios from "axios";

interface InitialState {
  profile: User;
  loading: string;
}
const initialState: InitialState = {
  profile: {
    _id: "",
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
  },
  loading: "",
};

export const fetchProfile = createAsyncThunk(
  "user/fetchProfile",
  async (id: string) => {
    const response = await (await axios.get(`/user/${id}`)).data;
    return response;
  }
);

export const userProfile = createSlice({
  name: "profile",
  initialState,
  reducers: {
    clearProfile: (state) => {
      state.profile = {
        _id: "",
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
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProfile.fulfilled, (state, action) => {
      state.profile = action.payload;
    });
    builder.addCase(fetchProfile.rejected, (state, action) => {
      console.log(action.payload);
    });
  },
});

export const { clearProfile } = userProfile.actions;

export default userProfile.reducer;
