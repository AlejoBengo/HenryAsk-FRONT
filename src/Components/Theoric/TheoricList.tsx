/*--------------------------------------------------------*/
/*-----------IMPORT UTILITIES-----------*/
import React, { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import Theoric from "../../app/interface";
import { fetchAllTheorics } from "../../app/Reducers/theoricSlice";
import { Link } from "react-router-dom";
/*-----------IMPORT MUI & CSS-----------*/
import { List, Stack, ListItemButton, Collapse, Box } from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import {
  StyledStack,
  StyledListItemButton,
  StyledListItemButton2,
} from "./StyledComponents";

/*--------------------------------------------------------*/

export default function TheoricList() {
  const [open, setOpen] = useState<boolean>(false);
  const [allTheorics, setAllTheorics] = useState<any>([]);

  // useEffect(() => {
  //   fetchAllTheorics().then((res) => setAllTheorics(res));
  // }, []);

  const handleOpen = (event: React.MouseEvent<HTMLDivElement>) => {
    setOpen(!open);
  };
  return (
    <List sx={{ width: "100%" }}>
      <StyledListItemButton
        onClick={handleOpen}
        sx={{ width: "100%", overflow: "hidden" }}
      >
        TEORICO{" "}
        {open ? (
          <ExpandLess sx={{ width: "100%" }} />
        ) : (
          <ExpandMore sx={{ width: "100%" }} />
        )}
      </StyledListItemButton>
      {allTheorics.map((teorico: any) => {
        return (
          <Collapse
            in={open}
            timeout="auto"
            unmountOnExit
            sx={{ width: "100%" }}
          >
            <Link
              to={`/Theoric/${teorico._id}`}
              style={{ textDecoration: "none" }}
            >
              <List component="div" disablePadding sx={{ width: "100%" }}>
                <StyledListItemButton2>{teorico.title}</StyledListItemButton2>
              </List>
            </Link>
          </Collapse>
        );
      })}
    </List>
  );
}
