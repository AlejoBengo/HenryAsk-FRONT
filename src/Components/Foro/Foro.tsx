import React, { useEffect } from "react";
import TableInstructor from "./TableInstructor/TableInstructor";
import { Div, TituloForo } from "../Style/StyledComponents";
import { Container, Typography } from "@mui/material";

let AlumnOrInstructor = ["Alumno" , "Instructor"]
export default function Foro(){
  return (
    <Div>
        <Typography variant="h3"
        textAlign="center"
        margin="1rem 0rem 1rem 0rem">
             Posteos de los <TituloForo>Instructores</TituloForo>
        </Typography>
        <Container maxWidth={false} sx={{ width: "80vw" }}>
            <TableInstructor height={440} user={AlumnOrInstructor[1]}/>
        </Container>
        <Typography variant="h3"
        textAlign="center"
        margin="1rem 0rem 1rem 0rem">
             Posteos entre <TituloForo>Alumnos</TituloForo>
        </Typography>
        <Container maxWidth={false} sx={{ width: "80vw" }}>
            <TableInstructor height={1040} user={AlumnOrInstructor[0]}/>
        </Container>
    </Div>
  );
};
