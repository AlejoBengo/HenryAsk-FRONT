import { createSlice, createAsyncThunk, PayloadAction, ActionReducerMapBuilder } from "@reduxjs/toolkit";
import axios from "axios";
import { initialStateInterface, ErrorType, ExerciseInterface } from "../Interfaces/interfaceExercise";
import { exerciseTemplate } from "../Utils/ExerciseUtilities";


const initialState: initialStateInterface = {
  exercises: [],
  exercisesFounded: [exerciseTemplate],
  exercise: exerciseTemplate,
  loading: false,
};

export const getAllExercises = createAsyncThunk(
  "exercises/getAllExercises",
  async () => {
    try {
      const response = (await axios(`/exercise/`)).data;
      return response ? response : new Error(`No se ha encontrado ningún ejercicio: ${response}`)
    } catch (error: ErrorType) {
      console.log(`Error en exercisesSlice:${error.message}`)
    }
  },
)

export const getExercisesByWord = createAsyncThunk(
  "exercises/getExercisesByWord",
  async (word: string) => {
    try {
      const response = (await axios(`/exercise/?word=${word}`)).data;
      return response ? response : new Error(`No se ha encontrado ningún ejercicio: ${response}`)
    } catch (error: ErrorType) {
      console.log(`Error en exercisesSlice:${error.message}`)
    }
  },
);

export const getExerciseById = createAsyncThunk(
  "exercise/getExerciseById",
  async (id: string) => {
    try {
      const response = (await axios(`/exercise/${id}`)).data;
      return response ? response : new Error(`No se ha encontrado ningún ejercicio: ${response}`)
    } catch (error: ErrorType) {
      console.log(`Error en exercisesSlice:${error.message}`)
    }
  },
);

export const deleteExercise = async (id:string) =>{
  try {
    await axios.delete(`/exercise?id=${id}`)
    
  } catch (error: ErrorType) {
    console.log(`Error en exercisesSlice:${error}`)
  }
};

export const editExercise = async (changesExercise: ExerciseInterface) => {
  try {
    await axios.put(`/exercise`,changesExercise)
    
  } catch (error: ErrorType) {
    console.log(`Error en exercisesSlice:${error}`);
    
  }
}

const exercisesReducer = createSlice({
  name: "exercises",
  initialState: initialState,
  reducers: {
    clearExercises: (state:initialStateInterface):void => {
      state = initialState;
    }
  },
  extraReducers: (builder:ActionReducerMapBuilder<initialStateInterface>):void => {
    builder
      .addCase(getAllExercises.fulfilled, (state, action: PayloadAction<Array<ExerciseInterface>>):void => {
        state.exercises = action.payload
      });
    builder
      .addCase(getExercisesByWord.fulfilled, (state, action: PayloadAction<Array<ExerciseInterface>>) : void => {
        state.exercisesFounded = action.payload;
      });
    builder
      .addCase(getExerciseById.fulfilled, (state, action: PayloadAction<ExerciseInterface>):void => {
          state.exercise = action.payload;
        },)
  }
});

export const { clearExercises } = exercisesReducer.actions;
export default exercisesReducer.reducer;