/*--------------------------------------------------------*/
import Activity from "../Components/Profile/Activity";
import HenryCoins from "../Components/Profile/HenryCoins";
import bannerDefault from "../Components/Profile/bannerDefault/bannerDefault.jpg";

/*-----------IMPORT UTILITIES-----------*/
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { useNavigate, Link as LinkR } from "react-router-dom";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { StackMigajas } from "../Components/Style/StyledComponents";
import { styled } from "@mui/material/styles";
import { Container, useTheme } from "@mui/material";
import BuyMeACoffe from "../Components/Profile/EditProfile/BuyMeACoffe";
import { deleteUserPanel } from "../app/Utils/editUser";
import DialogDeletePerfil from "../Components/Profile/EditProfile/DialogDeletePerfil";
import { useAuth0 } from "@auth0/auth0-react";
/*-----------IMPORT REDUCER-----------*/
import { fetchProfile, clearProfile } from "../app/Reducers/userProfileSlice";
/*-----------IMPORT MUI & CSS-----------*/
import CoffeeIcon from "@mui/icons-material/Coffee";
import { LinkDom } from "../Components/Style/StyledComponents";
import EditIcon from "@mui/icons-material/Edit";
import GitHubIcon from "@mui/icons-material/GitHub";
import { IconButton , MenuItem , Menu} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ModalDeleteAccount from "../Components/Navbar/ModalDeleteAccount";

import {
  Box,
  Button,
  Typography,
  Link,
  Paper,
  Avatar,
  Card,
  CardMedia,
  CardContent,
  Grid,
} from "@mui/material";

/*--------------------------------------------------------*/

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#c4c4c4",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
export const StyledAvatar = styled(Avatar)(
  ({ theme }) => `
  position: relative;
  top: -10vh;
  left: 1em;
  width: 20vh;
  height: 20vh;
  border: 4px solid;
  border-color: ${theme.palette.primary.dark};
  margin-bottom:-10vh;
  z-index: 2;
  &:before{
    z-index: -1;
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    background: ${theme.palette.primary.light};
}
  @media (max-width: 600px) {
    width:10vh;
    height:10vh;
    top: -5vh;
    margin-bottom:-5vh;
  }
`
);

export default function Profile() {
  const theme = useTheme();
  const roles = [
    "Usuario",
    "Estudiante de Prep",
    "Estudiante de Henry",
    "Teaching Assistant",
    "Instructor",
    "Administrator",
  ];
  const navigate = useNavigate();
  const { logout } = useAuth0();
  const { id }: any = useParams();
  const dispatch = useAppDispatch();
  const userProfile = useAppSelector((state) => state.profile.profile); //state.profile?
  const user = useAppSelector((state) => state.user.data);
  console.log(`userProfile: ${userProfile}`)
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const migajas = [
    <LinkR
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
    </LinkR>,
    <LinkR
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
    </LinkR>,
  ];

  useEffect(() => {
    dispatch(fetchProfile(id));
    return () => {
      dispatch(clearProfile());
    };
  }, [dispatch, id]);
  //If not includes "id" in dependencies's array when u're in a profile's detail of some user
  // and go to your profile's detail, this component dont render the change.
  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const [deleteAccount, setDeleteAccount] = React.useState(false);
  let [inputDelete, setInputDelete] = React.useState<any>("");
  const handleOpenDeleteAccount = () => {
    setDeleteAccount(true);
  };
  const handleCloseDeleteAccount = () => {
    setDeleteAccount(false);
  };
  const handleChangeDelete = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInputDelete(event.target.value);
  };
  const handleDeleteUser = () => {
    deleteUserPanel(userProfile._id)
      .then(() => setInputDelete("Eliminado147"))
      .then(() => logout({ returnTo: window.location.origin }));
  };
  const handleSuccessDelete = () => {
    logout({ returnTo: window.location.origin })
  };
  return (
    <>
    <ModalDeleteAccount
                handleCloseDeleteAccount={handleCloseDeleteAccount}
                deleteAccount={deleteAccount}
                handleChangeDelete={handleChangeDelete}
                inputDelete={inputDelete}
                handleDeleteUser={handleDeleteUser}
                handleSuccessDelete={handleSuccessDelete}
              />
      {/* <DialogDeletePerfil handleCloseModalDelete={handleCloseModalDelete} openDialogDelete={openDialogDelete} infoDelete={infoDelete} borrarUsuario={borrarUsuario}/> */}
      <StackMigajas spacing={2}>
        <Breadcrumbs separator="›">{migajas}</Breadcrumbs>
      </StackMigajas>
      <Container
        // maxWidth="md"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "1em",
        }}
      >
        <Card sx={{ minWidth: "100%" }}>
          <CardMedia
            component="img"
            image={userProfile.banner || bannerDefault}
            alt={userProfile.user_name + " banner"}
            sx={{
              width: "100%",
              height: "20vh",
            }}
          />
          <Box width="100%" display="flex" justifyContent="space-between">
            <StyledAvatar
              alt={userProfile.first_name} //if the image can't be loaded then will show the first alt's letter (user's firstname)
              src={
                userProfile.profile_picture?.length > 0
                  ? userProfile.profile_picture
                  : userProfile.avatar
                  ? userProfile.avatar
                  : userProfile.profile_picture
              }
            />
            {user._id !== userProfile._id &&
            userProfile.role >= 2 &&
            user.role >= 2 && user.role<=3 &&
            userProfile.coffee ? (
              <a
                href={userProfile.coffee}
                target="_blank"
                style={{ height: "20%", textDecoration: "none" }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ height: "20%" }}
                  startIcon={<CoffeeIcon />}
                  endIcon={<CoffeeIcon />}
                >
                  Regalame un cafecito
                </Button>
              </a>
            ) : null}
            {
              user._id === id ? (
                <>
              <Box>
                <IconButton onClick={handleMenu} aria-label="delete" size="large">
                  <MoreVertIcon fontSize="inherit" />
                </IconButton>
              </Box>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleCloseMenu}
              >
                  <MenuItem onClick={() => navigate(`/Profile/${id}/Edit`)}>
                    Editar Perfil
                  </MenuItem>
                  <MenuItem onClick={()=>handleOpenDeleteAccount()}>
                    Eliminar cuenta
                  </MenuItem>
              </Menu>
              </>) :null
            }
          </Box>

          <CardContent>
            <Typography variant="h5">
              {`${userProfile.first_name} ${userProfile.last_name} | ${userProfile.user_name}`}
              
            </Typography>
            <Typography variant="caption" gutterBottom>
              {`${userProfile.country}${
                userProfile.city && ` | ${userProfile.city} `
              }`}
              | {`${roles[userProfile.role]}`}
            </Typography>
            <Typography variant="body1" my={3}>
              {userProfile.biography}
            </Typography>
            <Box
              display="flex"
              justifyContent="space-around"
              alignItems="center"
              justifySelf="flex-start"
              sx={{ width: "100px" }}
              mt={1}
            >
              {userProfile.github !== "" && (
                <Link href={userProfile.github} rel="noopener" target="_blank">
                  <Avatar
                    sx={{
                      bgcolor: "info.main",
                      color: "info.contrastText",
                    }}
                  >
                    <GitHubIcon />
                  </Avatar>
                </Link>
              )}
              {userProfile.linkedin !== "" && (
                <Link
                  href={userProfile.linkedin}
                  rel="noopener"
                  target="_blank"
                >
                  <Avatar
                    sx={{
                      bgcolor: "info.main",
                      color: "info.contrastText",
                    }}
                  >
                    <LinkedInIcon />
                  </Avatar>
                </Link>
              )}
            </Box>
          </CardContent>

          <Card>
            <HenryCoins />
          </Card>
        </Card>
      </Container>

      {/* <Container>
        <HenryCoins />
      </Container> */}

      <Container>
        <Activity />
      </Container>
    </>
  );
}
