import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
/*-----------IMPORT UTILITIES-----------*/
import { fetchUserByUserName } from "../app/Utils/userNameUtilities";
import { clearUserName } from "../app/Reducers/getUserByUserName";
import { useAuth0 } from "@auth0/auth0-react";
import { fetchUserByEmail } from "../app/Reducers/userSlice";
/*-----------IMPORT Components-----------*/
import PanelTable from "../Components/PanelAdmin/PanelTable";
import PanelReport from "../Components/PanelAdmin/PanelReport";
import AcordeonRole from "../Components/PanelAdmin/AcordeonRole";
/*-----------IMPORT MUI & CSS-----------*/
import { Box } from "@mui/system";
import { Grid, Typography, TextField, Button } from "@mui/material";
import { TituloForo } from "../Components/Style/StyledComponents";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import { useNavigate } from "react-router-dom";

export default function PanelAdm(props: any) {
  const { user } = useAuth0();
  const dispatch = useAppDispatch();
  let [valor, setValor] = React.useState("");
  const navigate = useNavigate();

  // {
  // OWNER : {user_name, avatar , picture_profile , role }
  // DESCRIPTION : string mensaje report
  // STATUS : enum --> pending , rejected , fullfilled
  // REASON : enum ---> string
  // POST : {} | 'VACIO'
  // ANSWER : {} | 'VACIO'
  // COMMENT : {} | 'VACIO'
  // }


  //one = 'Información erronea.',
  //two = 'Es spam.',
  //three = 'Lenguaje o símbolos que incitan al odio.',
  //four = 'Bullying o acoso.',
  //five = 'Este usuario se hace pasar por mí.',
  //six = 'Contiene información personal.'

  const rows = [{
    owner: {user_name:'user_name', avatar:'' , profile_picture:'https://st2.depositphotos.com/1009634/7235/v/950/depositphotos_72350117-stock-illustration-no-user-profile-picture-hand.jpg' , role:5},
    description: 'Esta persona hizo un comentario desubicado , estoy totalemente en contra de lo que puso, quiero que lo sancionen porfavor. es un tipo muy racista , no tolero sus comentarios ni su persona',
    status:'PENDING',
    reason:'Información erronea.',
    post: { _id: '_id' ,owner: {first_name:'first_name', last_name:'last_name' , email:'email' , role:5 , country:'country', city:'city', user_name:'user_name', profile_picture:'https://st2.depositphotos.com/1009634/7235/v/950/depositphotos_72350117-stock-illustration-no-user-profile-picture-hand.jpg', avatar:'', isBanned:false}},
    answer:{},
    comment:{},
  },
  {
    owner: {user_name:'user_name1', avatar:'' , profile_picture:'https://st2.depositphotos.com/1009634/7235/v/950/depositphotos_72350117-stock-illustration-no-user-profile-picture-hand.jpg' , role:4},
    description: 'Esta persona hizo un comentario desubicado , estoy totalemente en contra de lo que puso, quiero que lo sancionen porfavor. es un tipo muy racista , no tolero sus comentarios ni su persona',
    status:'FULFILLED',
    reason:'Es spam.',
    post: {},
    answer:{_id:'_id', post:{_id:'_id',owner:{props:'...'}} ,content:'Hola esta es mi answer reportada',owner:{first_name:'first_name1', last_name:'last_name1' , email:'email1' , role:5 , country:'country1', city:'city1', user_name:'user_name1', profile_picture:'https://st2.depositphotos.com/1009634/7235/v/950/depositphotos_72350117-stock-illustration-no-user-profile-picture-hand.jpg', avatar:'', isBanned:false}},
    comment:{},
  },
  {
    owner: {user_name:'user_name2', avatar:'' , profile_picture:'https://st2.depositphotos.com/1009634/7235/v/950/depositphotos_72350117-stock-illustration-no-user-profile-picture-hand.jpg' , role:3},
    description: 'Esta persona hizo un comentario desubicado , estoy totalemente en contra de lo que puso, quiero que lo sancionen porfavor. es un tipo muy racista , no tolero sus comentarios ni su persona',
    status:'REJECTED',
    reason:'Lenguaje o símbolos que incitan al odio.',
    post: {},
    answer:{},
    comment:{content:'este es el comentario reportado', owner:{props:'...'}, answer:{post:{_id:'_id'}}},
  },
]


  // EN EL FRONT 
  // 1 COLUMNA- USUARIO QUE REPORTO 
  // 2 -  COMMENT | POST | ANSWER  
  // 3 - DESCRIPCION ---> MODAL QUE SE ABRE Y MUESTRA RAZON Y DESCRIPCION
  // 4 - STATUS: PENDING , REJECTED , FULFILLED 

  /* useEffect(() => {
    dispatch(fetchUserByEmail(user?.email))
    .then((response) =>response.payload.role !== 5 ? navigate("/Forum") : null);
  }, [user]); */

  function handleChange(
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) {
    setValor((valor = e.target.value));
  }

  function handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    dispatch(fetchUserByUserName(valor));
  }

  function handleClickClear(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    dispatch(clearUserName());
    setValor((valor = ""));
  }

  return (
    <Box
      width="100%"
      display="flex"
      justifyContent="center"
      sx={{ minHeight: `90vh` }}
    >
      <Box width="93vw">
        <Grid container spacing={2} sx={{ marginBottom: "5rem" }}>
          <Grid item xs={12}>
            <Typography
              variant="h3"
              component="div"
              sx={{ color: "secondary.main", marginTop:"1rem" }}
            >
              Panel de <TituloForo>Administrador</TituloForo>.
            </Typography>
          </Grid>

          <Grid
            item
            xs={12}
            sm={12}
            md={8}
            lg={8}
            xl={6}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <AcordeonRole />
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={6}
            sx={{
              display: "flex",
              justifyContent: {
                xl: "flex-end",
                xs: "flex-start",
                md: "flex-start",
              },
              alignItems: "flex-end",
            }}
          >
            <Typography
              variant="h6"
              component="div"
              sx={{
                display: { xs: "none", sm: "none", md: "flex" },
                border: "1px solid rgb(255,255,0)",
                padding: "0.58em",
                borderRadius: "10px",
                backgroundColor: "rgb(255,255,0)",
                fontWeight: "bold",
                marginBottom: ".420em",
              }}
            >
              Busqueda por usuario:
            </Typography>
            <TextField
              autoComplete="off"
              value={valor}
              label="Nombre de Usuario"
              id="outlined-start-adornment"
              sx={{ m: 1, width: { xs: "100%", md: "25ch" } }}
              onChange={(e) => handleChange(e)}
            />

            <IconButton
              onClick={(e) => handleClick(e)}
              aria-label="delete"
              size="large"
              sx={{ marginBottom: ".400em" }}
            >
              <SearchIcon fontSize="inherit" />
            </IconButton>
            <IconButton
              onClick={(e) => handleClickClear(e)}
              aria-label="delete"
              size="large"
              sx={{ marginBottom: ".400em" }}
            >
              <ClearIcon fontSize="inherit" />
            </IconButton>
          </Grid>

          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={6}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Typography
              variant="h5"
              component="div"
              sx={{ color: "secondary.main" }}
            >
              Post reportados:
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            lg={6}
            sx={{
              display: { sm: "none", xs: "none", md: "none", lg: "flex" },
              alignItems: "center",
            }}
          >
            <Typography
              variant="h5"
              component="div"
              sx={{ color: "secondary.main" }}
            >
              Administrar roles de usuarios:
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={6}>
            <PanelReport rows={rows} />
            
          </Grid>
          <Grid
            item
            sm={12}
            sx={{
              display: {
                xs: "flex",
                sm: "flex",
                md: "flex",
                lg: "none",
                xl: "none",
                marginTop: "20px",
              },
              alignItems: "center",
            }}
          >
            <Typography
              variant="h5"
              component="h5"
              sx={{ color: "secondary.main" }}
            >
              Administrar roles de usuarios:
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={6}>
            <PanelTable />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
