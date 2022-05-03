import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { User } from "../interface";
import { userTemplate } from "./userUtilities";


export const fetchUserByUserName = createAsyncThunk(
    "user/fetchUserByUserName",
    async (user: string | undefined) => {
      const response:User = (await axios(`/user?user_name=${user}`)).data;
      return { ...userTemplate , ... response };
    }
  );