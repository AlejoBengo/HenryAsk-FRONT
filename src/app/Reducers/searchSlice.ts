import { Posts, Theoric, User } from "../interface";
import { ExerciseInterface } from "../Interfaces/interfaceExercise";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
interface InitialState {
  posts: Array<Posts>;
  users: Array<User>;
  theorics: Array<Theoric>;
  exercises: Array<ExerciseInterface>;
}

const initialState: InitialState = {
  posts: [],
  users: [],
  theorics: [],
  exercises: [],
};

const getUsersByWord = async (searchValue: string) => {
  try {
    return await (
      await axios(`/user?word=${searchValue}`)
    ).data;
  } catch (error) {
    return [];
  }
};
const getPostsByWord = async (searchValue: string) => {
  try {
    return await (
      await axios(`/post?word=${searchValue}`)
    ).data;
  } catch (error) {
    return [];
  }
};
const getTheoricsByWord = async (searchValue: string) => {
  try {
    return await (
      await axios(`/theoric?word=${searchValue}`)
    ).data;
  } catch (error) {
    return [];
  }
};
const getExercisesByWord = async (searchValue: string) => {
  try {
    return await (
      await axios(`/exercise?word=${searchValue}`)
    ).data;
  } catch (error) {
    return [];
  }
};

export const getSearchResults = createAsyncThunk(
  "getSearchResults",
  async (searchValue: string) => {
    try {
      const users = await getUsersByWord(searchValue);
      const theorics = await getTheoricsByWord(searchValue);
      const posts = await getPostsByWord(searchValue);
      const exercises = await getExercisesByWord(searchValue);
      return {
        users,
        theorics,
        posts,
        exercises,
      };
    } catch (error) {
      return initialState;
    }
  }
);

const searchSlice = createSlice({
  initialState,
  name: "search",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSearchResults.fulfilled, (state, action) => {
      state.exercises = action.payload.exercises;
      state.users = action.payload.users;
      state.posts = action.payload.posts;
      state.theorics = action.payload.theorics;
    });
  },
});

export default searchSlice.reducer;
