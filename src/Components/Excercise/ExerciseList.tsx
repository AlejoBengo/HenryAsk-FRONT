/*--------------------------------------------------------*/
/*-----------IMPORT UTILITIES-----------*/
import React, { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { getAllExercises } from "../../app/Reducers/exercisesSlice";
/*-----------IMPORT MUI & CSS-----------*/
import { List, ListItemButton, Collapse } from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { StyledSpan } from "../Theoric/StyledComponents";
import { LinkDom } from "../Style/StyledComponents";
/*--------------------------------------------------------*/

const ExerciseList = () => {
  const [open, setOpen] = useState<boolean>(false);
  let [allExercisesLocal, setAllExercisesLocal] = useState<any>([]);
  const { exercises } = useAppSelector((state) => state.exercises);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllExercises());
    exercises?.length && setAllExercisesLocal((allExercisesLocal = exercises));
  }, []);

  const handleOpen = (event: React.MouseEvent<HTMLDivElement>) => {
    setOpen(!open);
  };
  return (
    <List sx={{ width: "100%" }}>
      <ListItemButton
        onClick={handleOpen}
        sx={{ width: "100%", overflow: "hidden" }}
        style={{ fontFamily: "Helvetica", display: "flex" }}
      >
        <StyledSpan>MATERIAL PRÁCTICO</StyledSpan>
        {open ? (
          <ExpandLess sx={{ width: "35%" }} />
        ) : (
          <ExpandMore sx={{ width: "35%" }} />
        )}
      </ListItemButton>
      {allExercisesLocal?.map((exercise: any) => {
        return (
          <Collapse
            in={open}
            key={exercise._id}
            timeout="auto"
            unmountOnExit
            sx={{ width: "100%" }}
          >
            <LinkDom to={`/Exercise/${exercise._id}`}>
              <List component="div" disablePadding sx={{ width: "100%" }}>
                <ListItemButton
                  style={{ fontFamily: "Helvetica", display: "flex" }}
                >
                  {exercise.title}
                </ListItemButton>
              </List>
            </LinkDom>
          </Collapse>
        );
      })}
    </List>
  );
};
export default ExerciseList;
