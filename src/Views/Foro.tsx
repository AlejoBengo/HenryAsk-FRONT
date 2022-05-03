/*--------------------------------------------------------*/
/*-----------IMPORT UTILITIES-----------*/
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
/*-----------IMPORT COMPONENTS-----------*/
import TableInstructor from "../Components/Foro/TableInstructor/TableInstructor";
/*-----------IMPORT MUI & CSS-----------*/
import { Div, TituloForo } from "../Components/Style/StyledComponents";
import { Container, Typography, Button } from "@mui/material";
import {fetchGetAllPosts} from '../app/Reducers/getPostsForum';
import { useAppSelector, useAppDispatch } from "../app/hooks";
import {Posts} from '../app/interface';

let AlumnOrInstructor = ["Alumno" , "Instructor"]
export default function Foro(){
  const userLogin = useAppSelector((state) => state.user.data);
  const posts = useAppSelector((state) => state.getAllPosts.posts);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  // USER LOOGIN ---> USUARIO LOGEAEDO ---> SE MUESTRA SEGUN SU ROL 
  useEffect(()=>{
    
    if(userLogin.role === 1){ // USUARIO DEL PREP
      dispatch(fetchGetAllPosts(1))
    }
    if(userLogin.role >=2){ // USUARIO LEARNING , TA , INSTRUCTOR , ADM
      dispatch(fetchGetAllPosts(2))
    }
  }, [userLogin])

  let postInstructores: Array<Posts> = []
  let postAlumnos: Array<Posts> = []
  let postPrep:Array<Posts> = []


  
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


posts?.map(e => {
    if(e.owner){
      if(e.owner.role === 4) postInstructores.push(e);
      if(e.owner.role === 2 || e.owner.role === 3 || e.owner.role === 5) postAlumnos.push(e);
      if(e.owner.role === 1) postPrep.push(e);
    }
  })
  

  
  /* setTimeout(()=> console.log("USER",userLogin), 4000)
  setTimeout(()=> console.log("ALUMNOS",postAlumnos), 4000)
  setTimeout(()=> console.log("INSTRUCTOR",postInstructores), 4000)
  setTimeout(()=> console.log("POST",posts), 4000) */

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
      <Link to="/Ask"><Button>Crear nueva discusion</Button></Link>
      <Container
      maxWidth={false}
      sx={{ width: "80vw" }}>
          <TableInstructor post={postPrep.reverse()} key="alumnos" height={1040} user={AlumnOrInstructor[0]}/>
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
          <TableInstructor post={postInstructores.reverse()} key="instructor" height={440} user={AlumnOrInstructor[1]}/>
      </Container>
      <Typography
      variant="h3"
      textAlign="center"
      margin="1rem 0rem 1rem 0rem">
           Posteos entre <TituloForo>Alumnos</TituloForo>
      </Typography>
      <Link to="/Ask"><Button>Crear nueva discusion</Button></Link>   
      <Container
      maxWidth={false}
      sx={{ width: "80vw" }}>
          <TableInstructor post={postAlumnos.reverse()} key="alumnos" height={1040} user={AlumnOrInstructor[0]}/>
      </Container>
  </Div>
  )
}

  
};
