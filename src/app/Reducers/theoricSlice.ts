import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { Theoric } from "../interface";
import axios from "axios";
import { theoricTemplate } from "../Utils/theoricUtilites";
import { ErrorType } from "../Interfaces/interfaceExercise";

interface InitialState {
  allTheorics: Array<Theoric>;
  oneTheoric: Theoric;
  loading: boolean;
  willEdit: any;
}

const initialState: InitialState = {
  allTheorics: [],
  oneTheoric: theoricTemplate,
  loading: false,
  willEdit: {},
};

export const fetchAllTheorics = createAsyncThunk(
  "theorics/fetchAllTheorics",
  async () => {
    try {
      const response = await (await axios(`/theoric`)).data;
      return response ? response : new Error(`No se ha encontrado ningún ejercicio: ${response}`);
    } catch (error: ErrorType) {
      console.log(`Error en exercisesSlice:${error.message}`)
    }
  }
) 

export const fetchOneTheoric = createAsyncThunk(
  "theorics/fetchOneTheoric",
  async (id: string) => {
    try {
      const response = (await axios(`/theoric/${id}`)).data;
      return response ? response : new Error(`No se ha encontrado ningún ejercicio: ${response}`);
    } catch (error: ErrorType) {
      console.log(`Error en theoricsSlice:${error.message}`)
    }
  }
);

export const editTheoric = async (obj: any) => {
  try {
    await axios.put(`/theoric`, obj);
  } catch (err) {
    console.log(err);
  }
};

export const deleteTheoric = async (id: string) => {
  try {
    await axios.delete(`/theoric/?id=${id}`);
  } catch (err) {
    console.log(err);
  }
};

export const theoricsReducer = createSlice({
  name: "theorics",
  initialState,
  reducers: {
    clearTheorics: (state) => {
      state = initialState;
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchAllTheorics.fulfilled, (state,action:PayloadAction<Array<Theoric>>):void => {
      state.allTheorics = action.payload;
    });
    builder 
      .addCase(fetchOneTheoric.fulfilled,(state, action: PayloadAction<Theoric>) : void => {
        state.oneTheoric = action.payload;
    })
}
});

export const { clearTheorics } = theoricsReducer.actions;
export default theoricsReducer.reducer;
