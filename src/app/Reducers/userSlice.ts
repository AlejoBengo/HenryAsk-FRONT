import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { User } from "../interface";
import { userTemplate } from "../Utils/userUtilities";
interface InitialState {
  data: User;
  loading: string;
}

const initialState: InitialState = {
  data: userTemplate,
  loading: "",
};
export const fetchUserByEmail = createAsyncThunk(
  "user/fetchUserById",
  async (email: string | undefined) => {
    const response = (await axios(`/user?email=${email}`)).data;
    return response;
  }
);
export const remoteUpdateUser = createAsyncThunk(
  "user/update",
  async (user: User) => {
    let aux = { ...user, id: user._id };
    console.log("aux", aux);
    const response = (await axios.put("/user", aux)).data;
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
      axios.put(`/user/`, state.data);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserByEmail.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export const { clearUser, updateUser } = userSlice.actions;

export default userSlice.reducer;
