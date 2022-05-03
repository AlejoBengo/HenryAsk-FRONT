import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { LateralItemStyled } from "../../Style/StyledComponents";
import { Button, TextField, IconButton, Box } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
import SearchIcon from '@mui/icons-material/Search';
import { useAppSelector , useAppDispatch} from "../../../app/hooks";
import { fetchUserByUserName } from "../../../app/Utils/userNameUtilities";
import { useNavigate } from "react-router-dom";

export default function AcordeonMenu() {
  const navigate = useNavigate()
  const busqueda = useAppSelector((state) => state.searchUserName.searchUserName);
  const dispatch = useAppDispatch()
  const [userName, setUserName] = React.useState<string>("")


  /*  const handleClick = ()=>{
    dispatch(fetchUserByUserName(userName))
    .then(response =>  (console.log(response),navigate(`/user/${response}`)) )
  } */

  const handleChange = ( event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value)
  }


  return (
    <div>
      <Accordion
        sx={{ width: "100%", margin: "0em 0em 1em 0em", boxShadow: "none" }}
      >
        <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
          <Button
            fullWidth
            variant="outlined"
            color="warning"
            startIcon={<SearchIcon />}
          >
            Buscar Usuario
          </Button>
        </AccordionSummary>

        <AccordionDetails>
          <Box
          display="flex"
          >
            <TextField
              fullWidth
              sx={{ padding: "10px" }}
              id="input-with-icon-textfield"
              autoComplete="off"
              autoSave="off"
              label="Nombre de usuario"
              onChange={handleChange}
              value={userName}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="end">
                    <AccountCircle sx={{ fontSize: "30px" }} />
                  </InputAdornment>
                ),
                endAdornment: (
                    <Button /* onClick={handleClick} */ >
                      Buscar
                    </Button>
                ),
              }}
              variant="standard"
            />
          </Box>

        </AccordionDetails>
      </Accordion>
    </div>
  );
}
