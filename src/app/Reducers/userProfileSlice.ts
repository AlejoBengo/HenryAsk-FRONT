import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { useAppSelector } from "../hooks";
import { User } from "../interface";
import axios from "axios";
import { userTemplate } from "../Utils/userUtilities";

interface InitialState {
  profile: User;
  loading: string;
}
const initialState: InitialState = {
  profile: userTemplate,
  loading: "",
};

export const fetchProfile = createAsyncThunk(
  "user/fetchProfile",
  async (id: string) => {
    const response = await (await axios.get(`/user?id=${id}`)).data[0];
    return response;
  }
);

export const userProfile = createSlice({
  name: "profile",
  initialState,
  reducers: {
    clearProfile: (state) => {
      state.profile = initialState.profile;
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
