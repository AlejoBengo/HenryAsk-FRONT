import React from "react";
import { Container, Box, Typography, Button } from "@mui/material";
import { Img } from "../ContentStyled";
import { useAuth0 } from "@auth0/auth0-react";
import BasicCard from "./BasicCard/BasicCard";



const MainContent = () => {
  const {isAuthenticated} = useAuth0()
  return (
    <div>
      {
      isAuthenticated? 

      <Container maxWidth={false} sx={{width:"95vw"}}>
      <Box 
      width="100%"
      display="flex"
      flexDirection="row"
      justifyContent="center"
      marginTop="2.5rem"
      height="10vh">
        <Typography variant="h3"> Que tipo de material buscas</Typography>
      </Box>

      <Box 
      width="100%"
      height="50vh"
      display="flex"
      flexDirection="row">
        <Box sx={{width:"100%",display:"flex", justifyContent:"center", alignItems:"center"}}>
          <BasicCard/>
        </Box>
        <Box sx={{width:"100%",display:"flex", justifyContent:"center", alignItems:"center"}}>
          <BasicCard/>
        </Box>
    </Box>
    </Container>
      
      
      
      
      : <Container maxWidth={false} sx={{width:"95vw"}}>

      
      <Box sx={{display:"flex", flexDirection:"row", width:"100%", height:"50vh", marginTop:"2.5rem"}}>
        <Box sx={{width:"70%",display:"flex", border:"1px solid red", justifyContent:"center", alignItems:"center"}}>
          <BasicCard/>
        </Box>
        <Box sx={{width:"100%", border:"1px solid red"}}>
          <Img src="./imgMainNoLogeado.jpg" alt="notfound" />
        </Box>

       
    </Box>
    <Box 
      width="100%"
      display="flex"
      flexDirection="row"
      justifyContent="center"
      marginTop="2.5rem"
      height="10vh">
        <Typography variant="h4"> Preparate para rendir el HenryChallenge con Prep.Course</Typography>
      </Box>

      <Box 
      width="100%"
      display="flex"
      flexDirection="row"
      justifyContent="center"
      marginTop="2.5rem">   
      <Button variant="contained" sx={{backgroundColor:"rgb(255, 255, 1)", color:"black", fontWeight:"bold"}} >
         Acceder al material
      </Button>
      </Box>
    </Container>
    }
    </div>

  );
};
export default MainContent;