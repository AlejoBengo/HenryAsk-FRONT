import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import userReducer from "./Reducers/userSlice";
import userProfile from "./Reducers/userProfileSlice";
import getPosts from "./Reducers/getPostsForum";
import allUsers from "./Reducers/allUserSlice";
import busquedaUserName from "./Reducers/getUserByUserName";
import mode from "./Reducers/modeReducer";
import exercisesReducer from "./Reducers/exercisesSlice";
import theoricsReducer from "./Reducers/theoricSlice";
import searchReducer from "./Reducers/searchSlice";
import getAllReport from "./Reducers/getAllReport";

export const store = configureStore({
  reducer: {
    user: userReducer,
    profile: userProfile,
    getAllPosts: getPosts,
    searchUserName: busquedaUserName,
    allUser: allUsers,
    mode,
    theorics: theoricsReducer,
    exercises: exercisesReducer,
    search: searchReducer,
    getAllReport: getAllReport,
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
