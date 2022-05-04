/*--------------------------------------------------------*/
/*-----------IMPORT UTILITIES-----------*/
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
/*-----------IMPORT COMPONENTS-----------*/
import { LoginButton } from "../ButtonsOutLogin/LoginButton/LoginButton";
import { LogoutButton } from "../ButtonsOutLogin/LogoutButton/LogoutButton";
/*-----------IMPORT MUI & CSS-----------*/
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
} from "@mui/material";
import { Img } from "../Content/ContentStyled";
import DehazeIcon from "@mui/icons-material/Dehaze";
import css from "./NavBar.module.css";
import logo from "./logo.png";

const pages = ["Material complementario", "Foro"];
const settings = ["Perfil", "Cerrar Sesion"];

const Navbar = () => {
  const navigate = useNavigate();
  const DBUser = useAppSelector((state) => state.user.data);
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const { isAuthenticated, user } = useAuth0();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (
    event: React.MouseEvent<HTMLLIElement | HTMLButtonElement>
  ) => {
    console.log("Hola", event);
    let target = event.target;
    // if (target.name === "Perfil") {
    // setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#000" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            component="div"
            width="15%"
            height="5vh"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            <Link to="/">
              <Img src={logo} alt="no responde img" />
            </Link>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              alignItems: "center",
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <DehazeIcon />
            </IconButton>

            <Box
              component="div"
              width="20%"
              height="5vh"
              marginLeft="1rem"
              sx={{ mr: 2, display: { xs: "flex", md: "none" } }}
            >
              <Img src={logo} alt="no responde img" />
            </Box>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Menu>
          </Box>

          {/* Box Menu en MD */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "end",
              marginRight: "4em",
            }}
          >
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              <Link
                to={DBUser.role === 0 ? "/Forum/News" : "/Forum"}
                className={css.StyledLink}
              >
                Foro
              </Link>
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              <Link to="/Content" className={css.StyledLink}>
                Material
              </Link>
            </Button>
          </Box>
          {/* ----------------- */}

          {isAuthenticated ? (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    alt={DBUser.first_name} //if the image can't be loaded then will show the first alt's letter (user's firstname)
                    src={
                      DBUser.profile_picture
                        ? DBUser.profile_picture
                        : "/static/images/avatar/2.jpg"
                    }
                  />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    {setting !== "Cerrar Sesion" ? (
                      <Button
                        color="inherit"
                        sx={{ width: "100%", height: "100%" }}
                        onClick={() => {
                          navigate(`/Profile/${DBUser?._id}`);
                        }}
                      >
                        {setting}
                      </Button>
                    ) : (
                      <LogoutButton></LogoutButton>
                    )}
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          ) : (
            <LoginButton />
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
