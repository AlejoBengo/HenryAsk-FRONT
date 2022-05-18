/*--------------------------------------------------------*/
/*-----------IMPORT UTILITIES-----------*/
import React, { useEffect, useState } from "react";
import { fetchAllExcercices } from "../../app/Reducers/exercisesSlice";
/*-----------IMPORT MUI & CSS-----------*/
import { List, ListItemButton, Collapse } from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { StyledSpan } from "../Theoric/StyledComponents";
import { LinkDom } from "../Style/StyledComponents";
import { ExerciseInterface } from "../../app/Interfaces/interfaceExercise";
import { exerciseTemplate } from "../../app/Utils/ExerciseUtilities";
/*--------------------------------------------------------*/

const ExerciseList = () => {
  const [open, setOpen] = useState<boolean>(false);
  let [allExercisesLocal, setAllExercisesLocal] = useState<
    Array<ExerciseInterface>
  >([exerciseTemplate]);

  useEffect(() => {
    fetchAllExcercices().then((res) => {
      setAllExercisesLocal(res);
    });
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
