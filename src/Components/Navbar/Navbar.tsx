import React from "react";
import {AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Avatar, Button , Tooltip, MenuItem} from '@mui/material'
import {Img} from '../Content/ContentStyled';
import DehazeIcon from '@mui/icons-material/Dehaze';
import { LoginButton } from "../LoginButton/LoginButton";
import { useAuth0 } from "@auth0/auth0-react";

const pages = ['Material complementario', 'Foro'];
const settings = ['Perfil', 'Cerrar Sesion'];




const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const {isAuthenticated, user} = useAuth0()


  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{backgroundColor: "#000"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            component="div"
            width="15%"
            height="5vh"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            <Img src="https://assets.soyhenry.com/henry-landing/assets/Henry/logo-white.png" alt="no responde img"/>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, alignItems:'center' }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
            <DehazeIcon/>
            </IconButton>

            <Box
                component="div"
                width="20%"
                height="5vh"
                marginLeft="1rem"
                sx={{ mr: 2, display: { xs: 'flex', md: 'none' } }}
            >
                <Img src="https://assets.soyhenry.com/henry-landing/assets/Henry/logo-white.png" alt="no responde img"/>
            </Box>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
                
                {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

        {/* Box Menu en MD */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent:"end", marginRight:"4em" }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
        {/* ----------------- */}

        {
            isAuthenticated?  <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> : <LoginButton/>
        }
         


        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;