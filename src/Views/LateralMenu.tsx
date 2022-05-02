/*--------------------------------------------------------*/
/*-----------IMPORT UTILITIES-----------*/
import React, { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import TheoricList from "../Components/Theoric/TheoricList";
/*-----------IMPORT MUI & CSS-----------*/
import { List, Stack, ListItemButton, Collapse, Box } from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import {
  StyledStack,
  StyledListItemButton,
  StyledListItemButton2,
} from "../Components/Theoric/StyledComponents";

/*--------------------------------------------------------*/

export default function LateralMenu() {
  return (
    <Stack>
      <TheoricList />
    </Stack>
  );
}
