import { createSlice } from "@reduxjs/toolkit";
import { User } from "../interface";
import { userTemplate } from "../Utils/userUtilities";
import { fetchUserByUserName } from "../Utils/userNameUtilities";

interface InitialState {
  searchUserName: User;
  loading: string;
}
const initialState: InitialState = {
  searchUserName: userTemplate,
  loading: "",
};
export const userProfile = createSlice({
  name: "searchUserName",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUserByUserName.fulfilled, (state, action) => {
      state.searchUserName = action.payload;
    });
    builder.addCase(fetchUserByUserName.rejected, (state, action) => {
      console.log(action.payload);
    });
  },
});

export default userProfile.reducer;
