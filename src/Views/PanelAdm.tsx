import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
/*-----------IMPORT UTILITIES-----------*/
import { fetchUserByUserName } from "../app/Utils/userNameUtilities";
import { clearUserName } from "../app/Reducers/getUserByUserName";
import { useAuth0 } from "@auth0/auth0-react";
import { fetchGetAllReport } from "../app/Reducers/getAllReport";
/*-----------IMPORT Components-----------*/
import PanelTable from "../Components/PanelAdmin/PanelTable";
import PanelReport from "../Components/PanelAdmin/PanelReport";
import AcordeonRole from "../Components/PanelAdmin/AcordeonRole";
import SelectFilter from "../Components/PanelAdmin/SelectFilter";
/*-----------IMPORT MUI & CSS-----------*/
import { Box } from "@mui/system";
import {
  Grid,
  Typography,
  TextField,
  Button,
  Breadcrumbs,
  useTheme,
} from "@mui/material";
import { TituloForo } from "../Components/Style/StyledComponents";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import { useNavigate, Link } from "react-router-dom";
import { StackMigajas } from "../Components/Style/StyledComponents";

export default function PanelAdm(props: any) {
  const { user } = useAuth0();
  const theme = useTheme();
  const dispatch = useAppDispatch();
  let [valor, setValor] = React.useState("");
  const navigate = useNavigate();

  const reports = useAppSelector((state: any) => state.getAllReport.reports );

  useEffect(()=>{
    dispatch(fetchGetAllReport())
  },[])

  let [filter, setFilter] = React.useState([]);
  const handleClearFilter = ()=>{
    setFilter(filter=[]);
  } 
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
/* 
 

  /* useEffect(() => {
    dispatch(fetchUserByEmail(user?.email))
    .then((response) =>response.payload.role !== 5 ? navigate("/Forum") : null);
  }, [user]); */

  function handleChange(
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
    setValor((valor = e.target.value));
    /* dispatch(fetchUserByUserName(valor)); */
  }

  function handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    dispatch(fetchUserByUserName(valor));
  }

  function handleClickClear(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    dispatch(clearUserName());
    setValor((valor =""));
  }

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
      to="/PanelAdm"
      style={{
        fontFamily: "Helvetica",
        textDecoration: "none",
        color: `${theme.palette.getContrastText(
          theme.palette.background.default
        )}`,
      }}
    >
      PANEL DE ADMINISTRADOR
    </Link>,
  ];

  return (
    <div>
      <StackMigajas spacing={2}>
        <Breadcrumbs separator="›">{migajas}</Breadcrumbs>
      </StackMigajas>
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
                sx={{ color: "secondary.main" }}
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
              sm={6}
              md={6}
              lg={3}
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
              lg={3}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Typography
                variant="h5"
                component="div"
                sx={{ color: "secondary.main" }}
              >
                Estado:
              </Typography>
              <SelectFilter filter={filter} setFilter={setFilter} reports={reports} />
              <IconButton onClick={handleClearFilter} aria-label="delete" size="large" color="error">
                <ClearIcon fontSize="inherit" />
              </IconButton>

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
              <PanelReport rows={filter.length>0? filter : reports}/>
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
    </div>
  );
}
