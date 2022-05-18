import React from "react";
/*-----------IMPORT UTILTIES-----------*/
import { remoteUpdateUser } from "../../app/Reducers/userSlice";
/*-----------IMPORT MUI & CSS-----------*/
import { InputLabel, MenuItem, FormControl, Select } from "@mui/material";
import { useAppDispatch } from "../../app/hooks";

export default function SelectRole(props: any) {
  const { valor, handleClickOpen, usuario } = props;
  const dispatch = useAppDispatch();
  let [role, setRole] = React.useState(valor);
  let [userInfo, setUserInfo] = React.useState(usuario);
  const handleChangeRole = (event: any) => {
    setRole((role = event.target.value));
    setUserInfo((userInfo = { ...userInfo, role: event.target.value }));
    dispatch(remoteUpdateUser(userInfo)).then(() => handleClickOpen(), null);
    window.location.reload();
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small">Rol</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={role}
        label="Age"
        onChange={handleChangeRole}
      >
        <MenuItem value={0}>0</MenuItem>
        <MenuItem value={1}>1</MenuItem>
        <MenuItem value={2}>2</MenuItem>
        <MenuItem value={3}>3</MenuItem>
        <MenuItem value={4}>4</MenuItem>
        <MenuItem value={5}>5</MenuItem>
        {/*         <MenuItem value={6}>6</MenuItem>
        <MenuItem value={7}>7</MenuItem> */}
      </Select>
    </FormControl>
  );
}
