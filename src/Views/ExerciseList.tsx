/*-----------IMPORT UTILITIES---------------*/
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { exerciseTemplate } from "../app/Utils/ExerciseUtilities";
/*-----------IMPORT TS---------------------*/
import { ExerciseInterface } from "../app/Interfaces/interfaceExercise";

/*-----------IMPORT REDUCER---------------*/
import { getAllExercises } from "../app/Reducers/exercisesSlice";

/*-----------IMPORT COMPONENTS-----------*/

/*-----------IMPORT MUI & CSS-----------*/

/*-------------------------------------*/
export const ExerciseList = () => {
  let [exercisesLocal, setExercisesLocal] = useState<Array<ExerciseInterface>>([exerciseTemplate]);
  const dispatch = useAppDispatch();
  const exercises:Array<ExerciseInterface> = useAppSelector((state) => state.exercises.exercises);
  console.log("exercises: ", exercises);

  useEffect(() => {
    dispatch(getAllExercises());
    setExercisesLocal(exercisesLocal = exercises)
  }, [dispatch]);

  return (
    <div>
      Hola, soy la Lista de Ejercicios.
      {exercises?.map((exercise, i:number) =>{
        return <p key={`${exercise}${i}`}> {exercise.title} </p>
      })}
    </div>);
};

