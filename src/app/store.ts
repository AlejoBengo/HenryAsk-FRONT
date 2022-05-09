import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import userReducer from "./Reducers/userSlice";
import userProfile from "./Reducers/userProfileSlice";
import getPosts from "./Reducers/getPostsForum";
import allUsers from "./Reducers/allUserSlice";
import busquedaUserName from "./Reducers/getUserByUserName";
import mode from "./Reducers/modeReducer";
import theoric from "./Reducers/theoricSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    profile: userProfile,
    theoric: theoric,
    getAllPosts: getPosts,
    searchUserName: busquedaUserName,
    allUser: allUsers,
    mode,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
