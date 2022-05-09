/*--------------------------------------------------------*/
/*-----------IMPORT UTILITIES-----------*/
import React, { useState } from "react";
import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import { useNavigate, useParams } from "react-router-dom";
import { userTemplate } from "../../../app/Utils/userUtilities";
import ModalEditProfile from "./ModalEditProfile";
import DialogSuccess from "../../Dialog/DialogSuccess";
import Dialog from "../../Dialog/Dialog";
/*-----------IMPORT MUI & CSS-----------*/
import Container from "@mui/material/Container";
import EditIcon from "@mui/icons-material/Edit";
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
  let [userInfo, setUserInfo] = useState({ ...userTemplate, ...user });
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  // ----------> Modal edit Profile
  const [avatar, setAvatar] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  //----------------//

  //  EJEMPLO DIALOGO ACA SIGUE EN LA LINEA 57
  const [openDialog, setOpenDialog] = useState(false);
  const [modalState, setModalState] = useState("Enviando...");

  // ------------------------//

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setUserInfo({
      ...userInfo,
      [event.target.name]: event.target.value,
    });
  };

  const handleSave = (event: React.MouseEvent<HTMLButtonElement>) => {
    setModalState("Enviando"); // seteamos primero 'Enviando' EXACTAMENTE escrito asi , en caso de que la funcion asincronica tome unos segundos y muestre mensaje de que carga
    setOpenDialog(true); // Abrimos el modal
    dispatch(remoteUpdateUser(userInfo))
      .then(
        () => (
          dispatch(fetchUserByEmail(userInfo.email)),
          setModalState("Cambios guardados correctamente")
        )
      ) // encierro en parentesis las dos acciones y las separo en coma ,
      // si ya entro aca es porque salio satisfactoriamente la peticion , "Cambios guardados correctamente" COINCIDE con linea 74 y DEBE coincidir
      .catch((err) => {
        console.log(err);
        setModalState("Error al hacer los cambios"); // en caso de entrar al catch mando mensaje de error que COINCIDE  con la prop de error en linea 75 , de esta forma tenemos renderizaods
        //manejos de errores tambien en el front
      });
  };
  if (user._id != id) navigate(`/Profile/${id}`);
  return (
    <Container sx={{ paddingBottom: "16px", paddingTop: "20px" }}>
      <Dialog
        openDialog={openDialog}
        setOpenDialog={setOpenDialog}
        textSuccess="Cambios guardados correctamente"
        error="Error al hacer los cambios"
        buttonText="Volver a mi perfil"
        modalState={modalState}
        setModalState={setModalState}
      />
      <Paper sx={{ p: 3 }}>
        <Box
          sx={{
            padding: "2rem",
          }}
        >
          <Typography
            variant="h4"
            color="primary"
            gutterBottom
            textAlign="center"
          >
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
          <Grid
            item
            xs={12}
            sm={12}
            sx={{
              display: "flex",
              margin: "0rem 0rem 0em 0em",
              justifyContent: "center",
            }}
          >
            <Avatar
              sx={{ width: "14rem", height: "13rem", objectFit: "cover" }}
              alt={user.user_name}
              src={
                userInfo.profile_picture.length > 0
                  ? userInfo.profile_picture
                  : avatar
                  ? avatar
                  : userInfo.avatar
                  ? userInfo.avatar
                  : userInfo.profile_picture
              }
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            sx={{
              display: "flex",
              margin: "0rem 0rem 2em 0em",
              justifyContent: "center",
            }}
          >
            <Button
              variant="contained"
              startIcon={<EditIcon />}
              onClick={handleOpen}
            >
              Elegir Avatar
            </Button>
            <ModalEditProfile
              open={open}
              setOpen={setOpen}
              handleOpen={handleOpen}
              handleClose={handleClose}
              userInfo={userInfo}
              setUserInfo={setUserInfo}
              avatar={avatar}
              setAvatar={setAvatar}
            />
          </Grid>

          <Grid item xs={11} sm={4}>
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
          <Grid item xs={11} sm={4}>
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
          <Grid item xs={11} sm={4}>
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
          <Grid item xs={11} sm={6}>
            <StyledTextField
              variant="filled"
              label="País"
              name="country"
              value={userInfo.country}
              onChange={(event) => handleInputChange(event)}
            ></StyledTextField>
          </Grid>
          <Grid item xs={11} sm={6}>
            <StyledTextField
              variant="filled"
              label="Ciudad"
              name="city"
              value={userInfo.city}
              onChange={(event) => handleInputChange(event)}
            ></StyledTextField>
          </Grid>
          <Grid item xs={11} sm={6}>
            <StyledTextField
              variant="filled"
              label="Foto de Perfil"
              name="profile_picture"
              value={userInfo.profile_picture}
              onChange={(event) => handleInputChange(event)}
            ></StyledTextField>
          </Grid>
          <Grid item xs={11} sm={6}>
            <StyledTextField
              variant="filled"
              label="Foto de Portada"
              name="banner"
              value={userInfo.banner}
              onChange={(event) => handleInputChange(event)}
            ></StyledTextField>
          </Grid>
          <Grid item xs={11} sm={6}>
            <StyledTextField
              variant="filled"
              label="LinkedIn"
              name="linkedin"
              value={userInfo.linkedin}
              onChange={(event) => handleInputChange(event)}
            ></StyledTextField>
          </Grid>
          <Grid item xs={11} sm={6}>
            <StyledTextField
              variant="filled"
              label="GitHub"
              name="github"
              value={userInfo.github}
              onChange={(event) => handleInputChange(event)}
            ></StyledTextField>
          </Grid>
          <Grid item xs={11} sm={12}>
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
