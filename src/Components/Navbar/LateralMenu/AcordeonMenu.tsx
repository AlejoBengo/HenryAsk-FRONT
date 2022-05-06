import React , {useState, useEffect} from "react";
import DialogFailed from "../../Dialog/DialogWarning";
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

export default function AcordeonMenu(props:any) {
  const {state , setState} = props;
  const navigate = useNavigate()
  const busqueda = useAppSelector((state) => state.searchUserName.searchUserName);
  const all = useAppSelector((state)=> state.allUser.allUsers);
  const dispatch = useAppDispatch()
  const [userName, setUserName] = useState<string>("")

  
  //DIALOG FAILED 
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
//------------------------//

   const handleClick = ()=>{
    let aux = false
    all.filter((e)=>{
      return e.user_name === userName? aux=true : null
    })
    if(aux){
      dispatch(fetchUserByUserName(userName))
      .then(response =>  response.payload._id )
      .then(data => navigate(`/Profile/${data}`))
      setState({left:false}) 
    }else{
      setOpen(true);
    }
  }

  const handleChange = ( event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value)
  }


  return (
    <div>
      <DialogFailed open={open} handleClose={handleClose}/>
      <Accordion
        sx={{ width: "100%", margin: "0em 0em 1em 0em", boxShadow: "none"}}
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
          sx={{border:"none"}}
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
                    <Button onClick={handleClick} >
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
