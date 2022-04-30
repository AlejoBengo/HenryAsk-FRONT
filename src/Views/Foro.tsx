/*--------------------------------------------------------*/
/*-----------IMPORT UTILITIES-----------*/
import React, { useEffect } from "react";
/*-----------IMPORT COMPONENTS-----------*/
import TableInstructor from "../Components/Foro/TableInstructor/TableInstructor";
/*-----------IMPORT MUI & CSS-----------*/
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

  // USER LOOGIN ---> USUARIO LOGEAEDO ---> SE MUESTRA SEGUN SU ROL 
  useEffect(()=>{
 
    if(userLogin.role === 1){ // USUARIO DEL PREP
      dispatch(fetchGetAllPosts(1))
    }
    if(userLogin.role >=2){ // USUARIO LEARNING , TA , INSTRUCTOR , ADM
      dispatch(fetchGetAllPosts(2))
    }
    //if(userLogin.role === 0){ // USUARIO LOGEADO PERO NO ES DEL PREP 
      // se redirija a la ruta /Forums/News

    //} DESCOMENTAAAAAAAAAAAAAAAAAAR 
  }, [])
  let postInstructores: Array<Posts> = []
  let postAlumnos: Array<Posts> = []
  let postPrep:Array<Posts> = []

// 0 ---> USUARIO LOGEADO PERO TODAVIA NO SE ANOTO AL PREP
// 1 ---> USUARIO ANOTADO EN PREP 
// 2 ---> USUARIO LEARNING 
// 3 ---> TA 
// 5 ---> INSTRUCTOR
// 6 ---> ADM

// FALTA RENDERIZAR PREP 

// SOLUCION PARA SALIR DEL APURO DE ALEJO ---> VIABLE , no deseable 
  posts?.map(e => {
    if(e.ownerData){
      if(e.ownerData[1] === "4") postInstructores.push(e);
      if(e.ownerData[1] !== "0" && e.ownerData[1] !== "4" && e.ownerData[1] !== "1") postAlumnos.push(e);
      if(e.ownerData[1] === "1") postPrep.push(e);
    }
  })
    //array ownerData [id:string , role:string, name:string , avatar ??????]

// COMO DEBERIA SER , CAMBIAR SI AGUS RESUELVE EL ERROR OWNER ---> PREGUNTARLE
  
 /*  posts?.map(e => {
    if(e.owner){
      if(e.owner.role === 4) postInstructores.push(e);
      if(e.owner.role === 2 || e.owner.role === 3 || e.owner.role === 5) postAlumnos.push(e);
    }
  }) */
  
 
  
  setTimeout(()=> console.log("USER",userLogin), 4000)
  setTimeout(()=> console.log("ALUMNOS",postAlumnos), 4000)
  setTimeout(()=> console.log("INSTRUCTOR",postInstructores), 4000)
  setTimeout(()=> console.log("POST",posts), 4000)

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
          <TableInstructor post={postPrep} key="alumnos" height={1040} user={AlumnOrInstructor[0]}/>
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
