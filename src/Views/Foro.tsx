/*--------------------------------------------------------*/
/*-----------IMPORT UTILITIES-----------*/
import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
/*-----------IMPORT COMPONENTS-----------*/
import TableInstructor from "../Components/Foro/TableInstructor/TableInstructor";
/*-----------IMPORT MUI & CSS-----------*/
import { Div, TituloForo } from "../Components/Style/StyledComponents";
import { Container, Grid, Alert } from "@mui/material";
import { fetchGetAllPosts } from "../app/Reducers/getPostsForum";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { Posts } from "../app/interface";
import RedirectToLogin from "../Components/RedirectToLogin/RedirectToLogin";
import { StyledTypography } from "../Components/Content/MainContent/TableExercise/TableExercise";

let AlumnOrInstructor = ["Alumno", "Instructor"];
export default function Foro() {
  const userLogin = useAppSelector((state) => state.user.data);
  const posts = useAppSelector((state) => state.getAllPosts.posts);
  const { isAuthenticated } = useAuth0();
  const dispatch = useAppDispatch();

  // USER LOOGIN ---> USUARIO LOGEAEDO ---> SE MUESTRA SEGUN SU ROL
  useEffect(() => {
    if (userLogin.role === 1) {
      // USUARIO DEL PREP
      dispatch(fetchGetAllPosts(1));
    } else if (userLogin.role === 2) {
      // USUARIO LEARNING , TA , INSTRUCTOR , ADM
      dispatch(fetchGetAllPosts(2));
    } else if (userLogin.role >= 3) {
      dispatch(fetchGetAllPosts(10));
    }
  }, [userLogin]);

  let postInstructores: Array<Posts> = [];
  let postAlumnos: Array<Posts> = [];
  let postPrep: Array<Posts> = [];

  // 0 ---> USUARIO LOGEADO PERO TODAVIA NO SE ANOTO AL PREP
  // 1 ---> USUARIO ANOTADO EN PREP
  // 2 ---> USUARIO LEARNING
  // 3 ---> TA
  // 4 ---> INSTRUCTOR
  // 5 ---> ADM

  // types
  // 0 ---> NEW
  // 1 ---> PREP
  // 2 ---> LEARNING

  // SI ROL 0 === TYPE 0
  // SI ROL 1 === TYPE 1
  // SI ROL 2 === 2
  // SI ROL 3 === 2 ---> DEBERIA TENER PERMISOS PARA TYPE 0 1(ESTOS PERMISOS NO TERMINADOS)
  // SI ROL 4 === 2
  // SI ROL 5 === 2 ---> DEBERIA TENER PERMISOS PARA TYPE 0 1(ESTOS PERMISOS NO TERMINADOS)

  // FALTA RENDERIZAR PREP

  posts?.map((e) => {
    if (e.owner) {
      if (e.owner.role === 4) postInstructores.push(e);
      if (e.owner.role === 2 || e.owner.role === 3 || e.owner.role === 5)
        postAlumnos.push(e);
      if (e.owner.role === 1) postPrep.push(e);
    }
    return e
  });

  //setTimeout(()=> console.log("USER",userLogin), 4000)
  //setTimeout(()=> console.log("ALUMNOS",postAlumnos), 4000)
  // setTimeout(()=> console.log("INSTRUCTOR",postInstructores), 4000)
  //setTimeout(()=> console.log("PREP",postPrep), 4000)
  //setTimeout(()=> console.log("POST",posts), 4000)
  if (!isAuthenticated) {
    return <RedirectToLogin open={true} />;
  }
  if (userLogin.role === 1) {
    return (
      <Div>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <StyledTypography
              variant="h3"
              textAlign="center"
              margin="1rem 0rem 1rem 0rem"
            >
              Bienvenido/a al <TituloForo>Prep.Course</TituloForo> Forum !
            </StyledTypography>
          </Grid>
          <Grid item xs={12}>
            <StyledTypography
              variant="h3"
              textAlign="center"
              margin="1rem 0rem 1rem 0rem"
            >
              Posteos entre <TituloForo>Alumnos</TituloForo>
            </StyledTypography>
          </Grid>
        </Grid>
        <Container maxWidth={false} sx={{ width: "80vw" }}>
          <TableInstructor
            post={postPrep.reverse()}
            key="alumnos"
            height={1040}
            user={AlumnOrInstructor[0]}
          />
        </Container>
      </Div>
    );
  } else if (userLogin.role === 2) {
    return (
      <Div>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <StyledTypography
              variant="h3"
              textAlign="center"
              margin="1rem 0rem 1rem 0rem"
            >
              Posteos de los <TituloForo>Instructores</TituloForo>
            </StyledTypography>
          </Grid>
        </Grid>
        <Container maxWidth={false} sx={{ width: "80vw" }}>
          <TableInstructor
            post={postInstructores.reverse()}
            key="instructor"
            height={1040}
            user={AlumnOrInstructor[1]}
          />
        </Container>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <StyledTypography
              variant="h3"
              textAlign="center"
              margin="1rem 0rem 1rem 0rem"
            >
              Posteos entre <TituloForo>Alumnos</TituloForo>
            </StyledTypography>
          </Grid>
        </Grid>
        <Container maxWidth={false} sx={{ width: "80vw" }}>
          <TableInstructor
            post={postAlumnos.reverse()}
            key="alumnos"
            height={1040}
            user={AlumnOrInstructor[0]}
          />
        </Container>
      </Div>
    );
  } else if (userLogin.role >= 3) {
    return (
      <>
        <Div>
          <Container maxWidth={false} sx={{ width: "80vw" }}>
            <Grid container spacing={5}>
              <Grid item xs={12}>
                <StyledTypography
                  variant="h3"
                  textAlign="center"
                  margin="1rem 0rem 1rem 0rem"
                >
                  Posteos de los <TituloForo>Instructores</TituloForo>
                </StyledTypography>
              </Grid>
              <Grid item xs={6}>
                <Alert variant="filled" severity="success">
                  Esta discusion fue resuelta!
                </Alert>
              </Grid>
              {/* <Grid item xs={7}></Grid> */}

              <Grid item xs={6}>
                <Alert variant="filled" severity="warning">
                  El propietario de esa discusion aun busca una respuesta!
                </Alert>
              </Grid>
            </Grid>
          </Container>
          <Container maxWidth={false} sx={{ width: "80vw" }}>
            <TableInstructor
              post={postInstructores.reverse()}
              key="instructor"
              height={1040}
              user={AlumnOrInstructor[1]}
            />
          </Container>
          <Container>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <StyledTypography
                  variant="h3"
                  textAlign="center"
                  margin="1rem 0rem 1rem 0rem"
                >
                  Posteos entre <TituloForo>Alumnos</TituloForo>
                </StyledTypography>
              </Grid>
            </Grid>
          </Container>

          <Container maxWidth={false} sx={{ width: "80vw" }}>
            <TableInstructor
              post={postAlumnos.reverse()}
              key="alumnos"
              height={1040}
              user={AlumnOrInstructor[0]}
            />
          </Container>
        </Div>

        <Div>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <StyledTypography
                variant="h3"
                textAlign="center"
                margin="1rem 0rem 1rem 0rem"
              >
                Bienvenido/a al <TituloForo>Prep.Course</TituloForo> Forum !
              </StyledTypography>
            </Grid>
            <Grid item xs={12}>
              <StyledTypography
                variant="h3"
                textAlign="center"
                margin="1rem 0rem 1rem 0rem"
              >
                Posteos entre <TituloForo>Alumnos</TituloForo>
              </StyledTypography>
            </Grid>
          </Grid>
          <Container maxWidth={false} sx={{ width: "80vw" }}>
            <TableInstructor
              post={postPrep.reverse()}
              key="alumnos"
              height={1040}
              user={AlumnOrInstructor[0]}
            />
          </Container>
        </Div>
      </>
    );
  } else {
    return null;
  }
}
