import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { useAppSelector } from "../hooks";
import axios from "axios";

interface User {
  _id: string;
  first_name: string;
  last_name: string;
  email: string;
  country: string;
  city: string;
  role: number;
  user_name: string;
  profile_picture: string;
  biography: string;
  own_henry_coin: number;
  give_henry_coin: number;
  theoric: Array<string>;
}
interface InitialState {
  data: User;
  loading: string;
}


const initialState: InitialState = {
  data: {
    _id: "",
    user_name: "",
    first_name: "",
    last_name: "",
    email: "",
    role: 0,
    country: "",
    city: "",
    profile_picture: "",
    biography: "",
    own_henry_coin: 0,
    give_henry_coin: 0,
    theoric: [],
  },
  loading: "",
};
export const fetchUserByEmail = createAsyncThunk(
  "user/fetchUserById",
  async (email: string | undefined) => {
    const response = (await axios(`/user?email=${email}`)).data;
    return response;
  }
);
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    clearUser: (state) => {
      state.data = initialState.data;
    },
    updateUser: (state, action: PayloadAction<User>) => {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserByEmail.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(fetchUserByEmail.rejected, (state, action) => {
      console.log(action.payload);
    });
    builder.addCase(fetchUserByEmail.pending, (state, action) => {
      state.loading = "pending";
      console.log(state.loading);
    });
  },
});

export const { clearUser, updateUser } = userSlice.actions;

export default userSlice.reducer;
