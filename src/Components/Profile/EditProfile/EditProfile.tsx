/*--------------------------------------------------------*/
/*-----------IMPORT UTILITIES-----------*/
import React, { useState, useEffect } from "react";
import bannerDefault from "../bannerDefault/bannerDefault.jpg";
import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import { useNavigate, useParams, Link } from "react-router-dom";
import { userTemplate } from "../../../app/Utils/userUtilities";
import { fetchAllUsers } from "../../../app/Utils/allUsers";
import ModalEditProfile from "./ModalEditProfile";
import DialogSuccess from "../../Dialog/DialogSuccess";
import Dialog from "../../Dialog/Dialog";
/*-----------IMPORT MUI & CSS-----------*/

import EditIcon from "@mui/icons-material/Edit";
import { StyledTextField, StackMigajas } from "../../Style/StyledComponents";
import {
  remoteUpdateUser,
  fetchUserByEmail,
} from "../../../app/Reducers/userSlice";
import {
  Avatar,
  useTheme,
  Typography,
  Breadcrumbs,
  Box,
  Grid,
  Paper,
  Button,
  Container,
  IconButton,
  CardMedia,
  Card,
} from "@mui/material";

import { StyledAvatar } from "../../../Views/Profile";
import { callbackify } from "util";
import BuyMeACoffe from "./BuyMeACoffe";
import HelpIcon from "@mui/icons-material/Help";
/*--------------------------------------------------------*/

export const EditProfile = () => {
  const theme = useTheme();
  const user = useAppSelector((state) => state.user.data);
  const allUsers = useAppSelector((state) => state.allUser.allUsers);
  const allUserNames = [...allUsers]
    .filter((arrayUser) => arrayUser._id !== user._id)
    .map((user) => user.user_name);
  let [userInfo, setUserInfo] = useState({ ...userTemplate, ...user });
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  // ----------> Modal edit Profile
  const [banner, setBanner] = React.useState("");
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
    setUserInfo(
      (userInfo = {
        ...userInfo,
        [event.target.name]: event.target.value,
      })
    );
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
  const handleCancel = (event: React.MouseEvent<HTMLButtonElement>) => {
    navigate(`/Profile/${id}`);
  };

  //Modal leer mas buy me coffe
  let [openInfo, setOpenInfo] = React.useState(false);
  const handleCloseInfo = () => {
    setOpenInfo(false);
  };
  const handleOpenInfo = () => {
    setOpenInfo(true);
  };
  // ====== /
  useEffect(() => {
    dispatch(fetchAllUsers());
  }, []);
  const migajas = [
    <Link
      to="/"
      style={{
        fontFamily: "Helvetica",
        textDecoration: "none",
        color: `${theme.palette.getContrastText(
          theme.palette.background.default
        )}`,
      }}
    >
      HOME
    </Link>,
    <Link
      to={`/Profile/${id}`}
      style={{
        fontFamily: "Helvetica",
        textDecoration: "none",
        color: `${theme.palette.getContrastText(
          theme.palette.background.default
        )}`,
      }}
    >
      PERFIL
    </Link>,
    <Link
      to={`/Profile/${id}/Edit`}
      style={{
        fontFamily: "Helvetica",
        textDecoration: "none",
        color: `${theme.palette.getContrastText(
          theme.palette.background.default
        )}`,
      }}
    >
      EDITAR PERFIL
    </Link>,
  ];

  if (user._id != id) navigate(`/Profile/${id}`);
  return (
    <>
      <StackMigajas>
        <Breadcrumbs separator="›">{migajas}</Breadcrumbs>
      </StackMigajas>
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
        <Paper sx={{ p: 3, minWidth: "100%" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{ color: "title.main" }}
              variant="h4"
              component="h3"
              gutterBottom
              display="flex"
              justifyContent="center"
            >
              Edita tu información personal
            </Typography>

            <Card sx={{ minWidth: "100%", padding: "1em" }}>
              <CardMedia
                component="img"
                image={userInfo.banner || bannerDefault}
                alt={userInfo.user_name + " banner"}
                sx={{
                  width: "100%",
                  height: "30vh",
                  border: "2px solid",
                  borderColor: "border.main",
                  borderRadius: "20px",
                }}
              />
              <StyledAvatar
                sx={{
                  left: "0em",
                  width: "30vh",
                  height: "30vh",
                  marginInline: "auto",
                  border: "4px solid",
                  borderColor: "border.main",
                }}
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
            </Card>
            <Button
              sx={{ border: "2px solid", borderColor: "border.main" }}
              variant="contained"
              startIcon={<EditIcon />}
              onClick={handleOpen}
            >
              Elegir Avatar
            </Button>
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
                margin: "0rem 0rem 2em 0em",
                justifyContent: "center",
              }}
            >
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
                helperText={
                  userInfo.first_name === "" ? "Campo obligatorio" : ""
                }
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
                helperText={
                  userInfo.last_name === "" ? "Campo obligatorio" : ""
                }
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
                helperText={
                  userInfo.user_name === ""
                    ? "Campo obligatorio"
                    : allUserNames.includes(userInfo.user_name)
                    ? "El nombre de ususario ya está tomado"
                    : ""
                }
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
            {user.role >= 2 && user.role <= 3 ? (
              <>
                <Grid item xs={11} sm={11}>
                  <StyledTextField
                    variant="filled"
                    label="Coffee"
                    name="coffee"
                    value={userInfo.coffee}
                    onChange={(event) => handleInputChange(event)}
                  />
                </Grid>
                <Grid item xs={1}>
                  <BuyMeACoffe
                    handleCloseInfo={handleCloseInfo}
                    openInfo={openInfo}
                  />
                  <IconButton
                    onClick={handleOpenInfo}
                    aria-label="delete"
                    size="large"
                    color="inherit"
                  >
                    <HelpIcon fontSize="inherit" />
                  </IconButton>
                </Grid>
              </>
            ) : null}

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
                sx={{ border: "2px solid", borderColor: "border.main" }}
                color="primary"
                variant="contained"
                onClick={handleSave}
                disabled={
                  userInfo.first_name === "" ||
                  userInfo.last_name === "" ||
                  userInfo.user_name === "" ||
                  allUserNames.includes(userInfo.user_name)
                }
              >
                Guardar
              </Button>
              <Button
                sx={{ border: "2px solid", borderColor: "border.main" }}
                color="primary"
                variant="contained"
                onClick={handleCancel}
                style={{ marginLeft: "1.5vw" }}
                disabled={
                  userInfo.first_name === "" ||
                  userInfo.last_name === "" ||
                  userInfo.user_name === ""
                }
              >
                Cancelar
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </>
  );
};
