/*--------------------------------------------------------*/
/*-----------IMPORT UTILITIES-----------*/
import React, { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { getAllTheoric } from "../../app/Utils/theoricUtilities";
/*-----------IMPORT MUI & CSS-----------*/
import { List, Stack, ListItemButton, Collapse } from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
// import {
//   StyledPaper,
//   StyledTypography,
//   StyledTextField,
//   StyledButton,
//   StyledBox,
// } from "./StyledComponents";
/*--------------------------------------------------------*/

export default function TheoricList() {
  const [open, setOpen] = useState({ open: true });
  const dispatch = useAppDispatch();

  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setOpen({ open: !open.open });
  };
  return (
    <div>
      <h1>HOLA</h1>
      <List>
        <ListItemButton></ListItemButton>
      </List>
    </div>
  );
}
