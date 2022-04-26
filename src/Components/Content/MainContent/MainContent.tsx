import React from "react";
import { Container, Box } from "@mui/material";
import { Img } from "../ContentStyled";



const MainContent = () => {
 

  return (
<Container maxWidth={false} sx={{width: "93vw"}}>
    <Box sx={{display:"flex", flexDirection:"row", width:"100%"}}>
        <Box sx={{width:"%50", border:"1px solid red"}}>

        </Box>
        <Box sx={{width:"%50", border:"1px solid red"}}>

        </Box>
    </Box>
</Container>
  );
};
export default MainContent;