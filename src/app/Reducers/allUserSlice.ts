import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAllUsers } from "../Utils/allUsers";
import { User } from "../interface";
interface InitialState {
  allUsers: Array<User>;
  auxUser: boolean;
  loading: string;
}

const initialState: InitialState = {
  allUsers: [],
  auxUser:false,
  loading: "",
};


export const AllUserSlice = createSlice({
  name: "allUser",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllUsers.fulfilled, (state, action) => {
      state.allUsers = action.payload;
    });
  },
});

//export const { existUserName } = AllUserSlice.actions;

export default AllUserSlice.reducer;