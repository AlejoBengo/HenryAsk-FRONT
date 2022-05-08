import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import userReducer from "./Reducers/userSlice";
import userProfile from "./Reducers/userProfileSlice"
import getPosts from './Reducers/getPostsForum'
import allUsers from './Reducers/allUserSlice'
import busquedaUserName from './Reducers/getUserByUserName';
import exercisesReducer from './Reducers/exercisesSlice';
import theoricsReducer from "./Reducers/theoricSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    profile:userProfile,
    getAllPosts:getPosts,
    searchUserName:busquedaUserName,
    theorics: theoricsReducer,
    exercises: exercisesReducer,
    allUser:allUsers,
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
