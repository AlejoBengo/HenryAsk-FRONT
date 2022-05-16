/*--------------------------------------------------------*/
/*-----------IMPORT UTILITIES-----------*/
import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
/*-----------IMPORT COMPONENTS-----------*/
import TableInstructor from "../Components/Foro/TableInstructor/TableInstructor";
/*-----------IMPORT MUI & CSS-----------*/
import {
  Div,
  TituloForo,
  StackMigajas,
} from "../Components/Style/StyledComponents";
import { Container, Grid, Alert, Breadcrumbs, useTheme } from "@mui/material";
import { fetchGetAllPosts } from "../app/Reducers/getPostsForum";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { Posts } from "../app/interface";
import RedirectToLogin from "../Components/RedirectToLogin/RedirectToLogin";
import { StyledTypography } from "../Components/Content/MainContent/TableExercise/TableExercise";

let AlumnOrInstructor = ["Usuario", "Instructor"];
export default function ForumNews() {
  const theme = useTheme();
  const userLogin = useAppSelector((state) => state.user.data);
  const posts = useAppSelector((state) => state.getAllPosts.posts);
  const { isAuthenticated } = useAuth0();
  const dispatch = useAppDispatch();

  // Traigo los post de los usuarios Rol 0
  useEffect(() => {
      dispatch(fetchGetAllPosts(0));
  }, [userLogin]);
// ======================// 

  let postNews:Array<Posts> = []; 

  posts?.map((e) => {
    if (e.owner) {
      if (e.owner.role === 0) postNews.push(e);
    }
  });

  //setTimeout(()=> console.log("USER",userLogin), 4000)
  //setTimeout(()=> console.log("ALUMNOS",postAlumnos), 4000)
  //setTimeout(()=> console.log("INSTRUCTOR",postInstructores), 4000)
/*   setTimeout(()=> console.log("POST",posts), 4000)
  setTimeout(()=> console.log("NEWS",postNews), 4000) */

  const migajas = [
    <Link
      to="/"
      style={{
        fontFamily: "Helvetica",
        textDecoration: "none",
        color: `${theme.palette.getContrastText(
          theme.palette.background.default
        )}`,
      }}
    >
      HOME
    </Link>,
    <Link
      to="/ForumNews"
      style={{
        fontFamily: "Helvetica",
        textDecoration: "none",
        color: `${theme.palette.getContrastText(
          theme.palette.background.default
        )}`,
      }}
    >
      FORO
    </Link>,
  ];
  if (!isAuthenticated) {
    return <RedirectToLogin open={true} />;
  }

    return (
      <Div>
        <StackMigajas spacing={2}>
          <Breadcrumbs separator="›">{migajas}</Breadcrumbs>
        </StackMigajas>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <StyledTypography
              variant="h3"
              textAlign="center"
              padding="3rem 0rem 3rem 0rem"
            >
              Bienvenido/a a <TituloForo>HENRY ASK</TituloForo> Forum !
            </StyledTypography>
          </Grid>
          <Grid item xs={12} sx={{display:"flex", justifyContent:"center"}}>
            <StyledTypography
              variant="h5"
              textAlign="center"
              padding="3rem 0rem 3rem 0rem" sx={{width:"70%"}}>
              Espacio dedicado exclusivamente para que puedas dejar tus dudas respecto al bootcamp y que Alumnos 👨‍💻,Instructores 🚀 o Miembros del Staff las resuelvan!!! 
            </StyledTypography>
          </Grid>
         {/*  <Grid item xs={12}>
            <StyledTypography
              variant="h3"
              textAlign="center"
              padding="3rem 0rem 3rem 0rem"
            >
              Posteos entre <TituloForo>Alumnos</TituloForo>
            </StyledTypography>
          </Grid> */}
        </Grid>
        
        <Container maxWidth={false} sx={{ width: "80vw" }}>
        <Grid container spacing={5}>
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
        
          <TableInstructor
            post={postNews.reverse()}
            key="News"
            height={1040}
            user={AlumnOrInstructor[0]}
          />
        </Container>
      </Div>
    );
}
