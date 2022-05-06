import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchAllUsers = createAsyncThunk(
    "user/fetchAllUsers",
    async () => {
      const response = (await axios.get(`/user`)).data;
      return response;
    }
  );