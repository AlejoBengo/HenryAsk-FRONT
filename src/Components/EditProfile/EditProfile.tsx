import React, { useState } from "react";
import { useAuth0, User } from "@auth0/auth0-react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { StyledTextField } from "./StyledComponents";
import { Navigate } from "react-router-dom";
import { updateUser } from "../../app/Reducers/userSlice";
import axios from "axios";
export const EditProfile = () => {
  const DBUser = useAppSelector((state) => state.user.data);
  const { user } = useAuth0();
  const [userInfo, setUserInfo] = useState({ ...DBUser });
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
    dispatch(updateUser(userInfo));
    navigate(`/`);
  };
  return (
    <Container sx={{ paddingBottom: "10px" }}>
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
        <Grid item xs={11} sm={6} sx={{ paddingRight: "16px" }}>
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
        <Grid item xs={11} sm={6} sx={{ paddingRight: "16px" }}>
          <StyledTextField
            sx={{ margin: "0px 16px 0px 16px", width: "100%" }}
            variant="filled"
            label="Apellido"
            name="last_name"
            value={userInfo.last_name}
            onChange={(event) => handleInputChange(event)}
            error={userInfo.last_name === ""}
            helperText={userInfo.last_name === "" ? "Campo obligatorio" : ""}
          ></StyledTextField>
        </Grid>
        <Grid item xs={11} sm={6} sx={{ paddingRight: "16px" }}>
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
        <Grid item xs={11} sm={6} sx={{ paddingRight: "16px" }}>
          <StyledTextField
            variant="filled"
            label="País"
            name="country"
            value={userInfo.country}
            onChange={(event) => handleInputChange(event)}
          ></StyledTextField>
        </Grid>
        <Grid item xs={11} sm={6} sx={{ paddingRight: "16px" }}>
          <StyledTextField
            variant="filled"
            label="Ciudad"
            name="city"
            value={userInfo.city}
            onChange={(event) => handleInputChange(event)}
          ></StyledTextField>
        </Grid>
        <Grid item xs={11} sm={6} sx={{ paddingRight: "16px" }}>
          <StyledTextField
            variant="filled"
            label="Foto de Perfil"
            name="profile_picture"
            value={userInfo.profile_picture}
            onChange={(event) => handleInputChange(event)}
          ></StyledTextField>
        </Grid>

        <Grid item xs={11} sm={12} sx={{ paddingRight: "16px" }}>
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
            paddingRight: "16px",
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
    </Container>
  );
};
