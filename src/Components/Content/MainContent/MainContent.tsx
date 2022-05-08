/*--------------------------------------------------------*/
/*-----------IMPORT UTILITIES-----------*/
import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { getAllExercises } from "../../../app/Reducers/exercisesSlice";
import { fetchAllTheorics } from "../../../app/Reducers/theoricSlice";
import { theoricTemplate } from "../../../app/Utils/theoricUtilites"
/*-----------IMPORT COMPONENTS-----------*/
import BasicCard1 from "./BasicCard/BasicCard1";
import TableExercise from "./TableExercise/TableExercise";
import TableTheoric from "./TableTheoric/TableTheoric";
/*-----------IMPORT MUI & CSS-----------*/
import { Container, Box, Typography, Button } from "@mui/material";
import { Imagen } from "../ContentStyled";
import img from "../../../Assets/imgMainNoLogeado.jpg";
import { exerciseTemplate } from "../../../app/Utils/ExerciseUtilities";
import { ExerciseInterface } from "../../../app/Interfaces/interfaceExercise";
import { Theoric } from "../../../app/interface"
/*--------------------------------------------------------*/

let textNoLogin = "Rinde el henry challengue y se parte de Henry!";

const MainContent = () => {
  const { isAuthenticated } = useAuth0();
  const {user:{ data }, exercises:{exercises},theorics:{allTheorics} } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  let [exercisesLocal,setExercisesLocal] = useState<Array<ExerciseInterface>>([exerciseTemplate]);
  let [theoricsLocal,setTheoricsLocal] = useState<Array<Theoric>>([theoricTemplate]);


  useEffect(() => {
    dispatch(getAllExercises())
    setExercisesLocal(exercisesLocal = exercises)
    dispatch(fetchAllTheorics())
    setTheoricsLocal(theoricsLocal = allTheorics)
  }
  ,[ data, dispatch, setExercisesLocal, setTheoricsLocal ]); // load the info when the user refresh the page

  return (
    <div>
      {isAuthenticated ? 
        <Container>
          <TableExercise exercisesToRender={exercisesLocal} key={`TableExercise`}/>
          <TableTheoric theoricsToRender={theoricsLocal} key={`TableTheoric`}/>
        </Container> 
      : (
        <Container maxWidth={false} sx={{ width: "95vw" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              height: "50vh",
              marginTop: "2.5rem",
            }}
          >
            <Box
              sx={{
                width: "70%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <BasicCard1 text={textNoLogin} />
            </Box>
            <Box sx={{ width: "100%" }}>
              <Imagen src={img} alt="notfound" />
            </Box>
          </Box>

          <Box
            width="100%"
            display="flex"
            flexDirection="row"
            justifyContent="center"
            marginTop="2.5rem"
            height="10vh"
          >
            <Typography variant="h4">
              {" "}
              Preparate para rendir el HenryChallenge con Prep.Course
            </Typography>
          </Box>

          <Box
            width="100%"
            display="flex"
            flexDirection="row"
            justifyContent="center"
            marginTop="2.5rem"
            sx={{ flexDirection: "column" }}
          >
            <Container
              maxWidth="md"
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography variant="h5">
                En que consiste el Henry Challenge?
              </Typography>
              <br />
              <Typography variant="h6">
                Uno de los requisitos para ser admitido a Henry es realizar el
                Henry Challenge, que consiste en un test nivelatorio donde
                evaluamos los fundamentos de JavaScript, HTML y CSS. Una vez que
                completes el formulario de aplicación, te llegará un mail con un
                link a un formulario donde podrás inscribirte a una fecha para
                realizarlo. Tendrás tiempo desde las 9 hs (GMT-3) del día
                seleccionado hasta las 13 hs (GMT-3) del día siguiente.
                Estimamos que se puede resolver en 2-3 horas. Es importante que
                además de conocer el contenido teórico tengas una cuenta de
                GitHub y estés familiarizado con Git para poder realizar el
                challenge con éxito. Si no tienes conocimientos previos no te
                preocupes, para eso creamos el Prep Course (gratuito y on
                demand).
              </Typography>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "rgb(255, 255, 1)",
                  color: "black",
                  fontWeight: "bold",
                }}
              >
                Acceder al material
              </Button>
            </Container>
          </Box>
        </Container>
      )}
    </div>
  );
};
export default MainContent;
