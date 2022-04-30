import React, { useEffect } from "react";
import TableInstructor from "../Components/Foro/TableInstructor/TableInstructor";
import { Div, TituloForo } from "../Components/Style/StyledComponents";
import { Container, Typography } from "@mui/material";
import {fetchGetAllPosts} from '../app/Reducers/getPostsForum';
import { useAppSelector, useAppDispatch } from "../app/hooks";
import {Posts} from '../app/interface';

let AlumnOrInstructor = ["Alumno" , "Instructor"]
export default function Foro(){
  const userLogin = useAppSelector((state) => state.user.data);
  const posts = useAppSelector((state) => state.getAllPosts.posts);
  const dispatch = useAppDispatch();
  useEffect(()=>{
    if(userLogin.role === 0){
      // se redirija a la ruta /Forums/News
    }
    if(userLogin.role === 1){
      dispatch(fetchGetAllPosts("prep"))
    }
    if(userLogin.role >=2){
      dispatch(fetchGetAllPosts("learning"))
    }
  }, [])
  let postInstructores: Array<Posts> = []
  let postAlumnos: Array<Posts> = []

  posts?.map(e => {
    if(e.owner){
      if(e.owner.role === 4) postInstructores.push(e);
      if(e.owner.role === 2 || e.owner.role === 3 || e.owner.role === 5) postAlumnos.push(e);
    }
  })
  
  setTimeout(()=> console.log("USER",userLogin), 4000)
  setTimeout(()=> console.log("ALUMNOS",postAlumnos), 4000)
  setTimeout(()=> console.log("INSTRUCTOR",postInstructores), 4000)
  //array owner [id:string , role:string, name:string , avatar ??????]

if(userLogin.role === 1){
  return (
    <Div>
      <Typography
      variant="h3"
      textAlign="center"
      margin="1rem 0rem 1rem 0rem">
           Bienvenido/a al <TituloForo>Prep.Course</TituloForo> Forum !
      </Typography>
      <Typography
      variant="h3"
      textAlign="center"
      margin="1rem 0rem 1rem 0rem">
           Posteos entre <TituloForo>Alumnos</TituloForo>
      </Typography>
      <Container
      maxWidth={false}
      sx={{ width: "80vw" }}>
          <TableInstructor post={postAlumnos} key="alumnos" height={1040} user={AlumnOrInstructor[0]}/>
      </Container>
  </Div>
);
} else{
  return (

    
    <Div>
      <Typography
      variant="h3"
      textAlign="center"
      margin="1rem 0rem 1rem 0rem">
           Posteos de los <TituloForo>Instructores</TituloForo>
      </Typography>
      <Container
      maxWidth={false}
      sx={{ width: "80vw" }}>
          <TableInstructor post={postInstructores} key="instructor" height={440} user={AlumnOrInstructor[1]}/>
      </Container>
      <Typography
      variant="h3"
      textAlign="center"
      margin="1rem 0rem 1rem 0rem">
           Posteos entre <TituloForo>Alumnos</TituloForo>
      </Typography>
      <Container
      maxWidth={false}
      sx={{ width: "80vw" }}>
          <TableInstructor post={postAlumnos} key="alumnos" height={1040} user={AlumnOrInstructor[0]}/>
      </Container>
  </Div>
  )
}

  
};
