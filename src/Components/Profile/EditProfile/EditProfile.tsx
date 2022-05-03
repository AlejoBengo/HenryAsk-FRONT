/*--------------------------------------------------------*/
/*-----------IMPORT UTILITIES-----------*/
import React, { useState } from "react";
import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import { useNavigate } from "react-router-dom";
import { userTemplate } from "../../../app/Utils/userUtilities";
/*-----------IMPORT MUI & CSS-----------*/
import Container from "@mui/material/Container";
import EditIcon from '@mui/icons-material/Edit';
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { StyledTextField } from "../../Style/StyledComponents";
import {
  remoteUpdateUser,
  fetchUserByEmail,
} from "../../../app/Reducers/userSlice";
import { Avatar } from "@mui/material";
/*--------------------------------------------------------*/

export const EditProfile = () => {
  const user = useAppSelector((state) => state.user.data);
  const [userInfo, setUserInfo] = useState({ ...userTemplate, ...user });
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setUserInfo({
      ...userInfo,
      [event.target.name]: event.target.value,
    });
  };

  const handleSave = (event: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(remoteUpdateUser(userInfo))
      .then(() => dispatch(fetchUserByEmail(userInfo.email)))
      .then(() => {
        navigate(`/Profile/${user._id}`);
      })
      .catch((err) => {
        console.log(err);
        alert("Algo salió mal, intente de nuevo");
      });
  };
  return (
    <Container sx={{ paddingBottom: "16px", paddingTop: "20px" }}>
      <Paper sx={{ paddingBottom: "16px" }}>
        <Box
          sx={{
            padding: "2rem",
          }}
        >
          <Typography variant="h4" color="primary" gutterBottom>
            Edita tu información personal
          </Typography>
        </Box>
        <Grid
          container
          spacing={2}
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <Grid item xs={12} sm={12} sx={{ paddingRight: "1em", display:"flex", margin:"0rem 0rem 3em 5em" }}>
            <Box
            display="flex"
            justifyContent="center"
            sx={{border:"1px solid black", height:"26vh"}}
            width="20%"
            >
            <Avatar
            sx={{width:"100%" , height:"auto"}}
            alt={userInfo.user_name} 
            src={userInfo.profile_picture}/>
            </Box>
            <Box
            display="flex"
            alignItems="end"
            sx={{border:"1px solid black", height:"26vh", marginLeft:"2em"}}
            width="50%"
            >
              <Button variant="contained" startIcon={<EditIcon />}>
                Editar Avatar
              </Button>
            </Box>
          </Grid>

          <Grid item xs={11} sm={4} sx={{ paddingRight: "1em" }}>
            <StyledTextField
              variant="filled"
              label="Nombre"
              name="first_name"
              value={userInfo.first_name}
              onChange={(event) => handleInputChange(event)}
              error={userInfo.first_name === ""}
              helperText={userInfo.first_name === "" ? "Campo obligatorio" : ""}
            ></StyledTextField>
          </Grid>
          <Grid item xs={11} sm={4} sx={{ paddingRight: "1em" }}>
            <StyledTextField
              variant="filled"
              label="Apellido"
              name="last_name"
              value={userInfo.last_name}
              onChange={(event) => handleInputChange(event)}
              error={userInfo.last_name === ""}
              helperText={userInfo.last_name === "" ? "Campo obligatorio" : ""}
            ></StyledTextField>
          </Grid>
          <Grid item xs={11} sm={4} sx={{ paddingRight: "1em" }}>
            <StyledTextField
              variant="filled"
              label="Nombre de Usuario"
              name="user_name"
              value={userInfo.user_name}
              onChange={(event) => handleInputChange(event)}
              error={userInfo.user_name === ""}
              helperText={userInfo.user_name === "" ? "Campo obligatorio" : ""}
            ></StyledTextField>
          </Grid>
          <Grid item xs={11} sm={6} sx={{ paddingRight: "1em" }}>
            <StyledTextField
              variant="filled"
              label="País"
              name="country"
              value={userInfo.country}
              onChange={(event) => handleInputChange(event)}
            ></StyledTextField>
          </Grid>
          <Grid item xs={11} sm={6} sx={{ paddingRight: "1em" }}>
            <StyledTextField
              variant="filled"
              label="Ciudad"
              name="city"
              value={userInfo.city}
              onChange={(event) => handleInputChange(event)}
            ></StyledTextField>
          </Grid>
          <Grid item xs={11} sm={6} sx={{ paddingRight: "1em" }}>
            <StyledTextField
              variant="filled"
              label="Foto de Perfil"
              name="profile_picture"
              value={userInfo.profile_picture}
              onChange={(event) => handleInputChange(event)}
            ></StyledTextField>
          </Grid>
          <Grid item xs={11} sm={6} sx={{ paddingRight: "1em" }}>
            <StyledTextField
              variant="filled"
              label="Foto de Portada"
              name="banner"
              value={userInfo.banner}
              onChange={(event) => handleInputChange(event)}
            ></StyledTextField>
          </Grid>

          <Grid item xs={11} sm={12} sx={{ paddingRight: "1em" }}>
            <StyledTextField
              variant="filled"
              multiline
              label="Biografía"
              name="biography"
              value={userInfo.biography}
              onChange={(event) => handleInputChange(event)}
              minRows={3}
              maxRows={5}
            ></StyledTextField>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              paddingRight: "1em",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button
              color="primary"
              variant="contained"
              onClick={handleSave}
              disabled={
                userInfo.first_name === "" ||
                userInfo.last_name === "" ||
                userInfo.user_name === ""
              }
            >
              Guardar
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};
