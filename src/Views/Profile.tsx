/*--------------------------------------------------------*/
/*-----------IMPORT UTILITIES-----------*/
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { styled } from '@mui/material/styles';
import { Container } from "@mui/material";
/*-----------IMPORT REDUCER-----------*/
import { fetchProfile, clearProfile } from "../app/Reducers/userProfileSlice";
/*-----------IMPORT MUI & CSS-----------*/
import EditIcon from "@mui/icons-material/Edit";
import { Box, Button, Typography , Stack , Paper} from "@mui/material";
import { ImgProfile } from "../Components/Content/ContentStyled";
/*--------------------------------------------------------*/

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#c4c4c4',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Profile() {
  const roles = [
    "Usuario",
    "Estudiante de Prep",
    "Estudiante de Henry",
    "Teaching Assistant",
    "Instructor",
    "Administrator",
  ];
  const navigate = useNavigate();
  const { id }: any = useParams();
  const dispatch = useAppDispatch();
  const userProfile = useAppSelector((state) => state.profile.profile); //state.profile?
  const user = useAppSelector((state) => state.user.data);
  useEffect(() => {
    dispatch(fetchProfile(id));
  }, []);
  return (
    <Container maxWidth="md" sx={{ width:"100%", height:"91vh",display:"flex",justifyContent:"center", alignItems:"center"}}>
     <Box
     width="70%"
     sx={{
      height:"max-content",
      backgroundColor:"#acacac",
      boxShadow:"1px 1px 20px black"
     }}
     >
       <Box 
       width="100%"
       display="flex"
       alignItems="center"
       flexDirection="column"
       sx={{height:"100%" }}
       >
       <Typography 
        variant="h4" 
        textAlign="center"
        margin="1.2rem"
        >
          Perfil
        </Typography>
        <ImgProfile
          src={userProfile.profile_picture}
          alt="profilePicture"
        />
        {id === user._id ? (
          <Button
            variant="contained"
            onClick={() => navigate(`/Profile/${id}/Edit`)} startIcon={<EditIcon/>}
          >
            Editar Perfil
          </Button>
        ) : null}

          <Stack spacing={2} sx={{width:"100%", marginTop:"2rem"}}>
            <Item sx={{fontWeight:"bold"}}>Name:{userProfile.first_name}</Item>
            <Item sx={{fontWeight:"bold"}}>LastName:{userProfile.last_name}</Item>
            <Item sx={{fontWeight:"bold"}}>Rol: {roles[userProfile.role]}</Item>
            <Item sx={{fontWeight:"bold"}}>Country:{userProfile.country}</Item>
            <Item sx={{fontWeight:"bold"}}>Email: {userProfile.email}</Item>
            <Item sx={{fontWeight:"bold"}}>Biography:{userProfile.biography}</Item>
          </Stack>
       </Box>
       
    </Box>
    </Container>
    
  );
}
