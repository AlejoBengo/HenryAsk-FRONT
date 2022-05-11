/*--------------------------------------------------------*/
/*-----------IMPORT UTILITIES-----------*/
import React, { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { fetchAllTheorics } from "../../app/Reducers/theoricSlice";
import { fetchAllTheoricsReducer } from "../../app/Reducers/theoricSlice";
/*-----------IMPORT MUI & CSS-----------*/
import { List, ListItemButton, Collapse } from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { StyledSpan } from "./StyledComponents";
import { LinkDom } from "../Style/StyledComponents";
/*--------------------------------------------------------*/

export default function TheoricList() {
  const [open, setOpen] = useState<boolean>(false);
  let [allTheoricsLocal, setAllTheoricsLocal] = useState<any>([]);
  const { allTheorics } = useAppSelector((state) => state.theorics);
  const dipatch = useAppDispatch();

  useEffect(() => {
    // dipatch( fetchAllTheoricsReducer() )
    fetchAllTheorics().then((res) => {
      setAllTheoricsLocal(res);
    });
  }, []);

  const handleOpen = (event: React.MouseEvent<HTMLDivElement>) => {
    setOpen(!open);
  };

  return (
    <List sx={{ width: "100%" }}>
      <ListItemButton
        onClick={handleOpen}
        sx={{ width: "100%", overflow: "hidden" }}
        style={{ fontFamily: "Helvetica", display: "flex" }}
      >
        <StyledSpan>MATERIAL TEÓRICO</StyledSpan>
        {open ? (
          <ExpandLess sx={{ width: "35%" }} />
        ) : (
          <ExpandMore sx={{ width: "35%" }} />
        )}
      </ListItemButton>
      {allTheoricsLocal?.map((teorico: any) => {
        return (
          <Collapse
            in={open}
            key={teorico._id}
            timeout="auto"
            unmountOnExit
            sx={{ width: "100%" }}
          >
            <LinkDom to={`/Theoric/${teorico._id}`}>
              <List component="div" disablePadding sx={{ width: "100%" }}>
                <ListItemButton
                  style={{ fontFamily: "Helvetica", display: "flex" }}
                >
                  {teorico.title}
                </ListItemButton>
              </List>
            </LinkDom>
          </Collapse>
        );
      })}
    </List>
  );
}
