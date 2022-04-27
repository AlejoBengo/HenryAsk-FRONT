import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { StyledTextField } from "./StyledComponents";

interface FormFields {
  first_name: string;
  last_name: string;
  gender: string;
  country: string;
  user_name: string;
  profile_picture: string;
  biography: string;
}
export const CompleteSignUp = () => {
  const { isAuthenticated, user } = useAuth0();
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState<FormFields>({
    first_name: "",
    last_name: "",
    gender: "",
    country: "",
    user_name: "",
    profile_picture: "",
    biography: "",
  });
  if (!isAuthenticated) {
    navigate("/");
    return null;
  }

  const genders = ["Masculino", "Femenino", "Otro"];

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setUserInfo((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };
  return (
    <Container sx={{ paddingBottom: "10px" }}>
      <Box
        sx={{
          padding: "2rem",
        }}
      >
        <Typography variant="h4" color="primary" gutterBottom>
          Ya casi terminas! Por favor, rellena el formulario para continuar
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
          ></StyledTextField>
        </Grid>
        <Grid item xs={11} sm={6} sx={{ paddingRight: "16px" }}>
          <StyledTextField
            variant="filled"
            label="Nombre de Usuario"
            name="user_name"
            value={userInfo.user_name}
            onChange={(event) => handleInputChange(event)}
          ></StyledTextField>
        </Grid>
        <Grid item xs={11} sm={6} sx={{ paddingRight: "16px" }}>
          <StyledTextField
            select
            variant="filled"
            label="Género"
            name="gender"
            value={userInfo.gender}
            onChange={(event) => handleInputChange(event)}
          >
            {genders.map((gender: string) => {
              return <option>{gender}</option>;
            })}
          </StyledTextField>
        </Grid>
        <Grid item xs={11} sm={6} sx={{ paddingRight: "16px" }}>
          <StyledTextField
            variant="filled"
            label="country"
            name="country"
            value={userInfo.country}
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
      </Grid>
    </Container>
  );
};
export default CompleteSignUp;
