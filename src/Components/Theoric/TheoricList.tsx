/*--------------------------------------------------------*/
/*-----------IMPORT UTILITIES-----------*/
import React, { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { fetchAllTheorics } from "../../app/Reducers/theoricSlice";
/*-----------IMPORT MUI & CSS-----------*/
import { List, ListItemButton, Collapse, Link } from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
/*--------------------------------------------------------*/

export default function TheoricList() {
  const [open, setOpen] = useState<boolean>(false);
  let [allTheoricsLocal, setAllTheoricsLocal] = useState<any>([]);
  const {allTheorics} = useAppSelector((state) => state.theorics)
  const dipatch = useAppDispatch();

  useEffect(() => {
    dipatch( fetchAllTheorics() )
    setAllTheoricsLocal( allTheoricsLocal = allTheorics )
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
        TEORICO
        {open ? (
          <ExpandLess sx={{ width: "100%" }} />
        ) : (
          <ExpandMore sx={{ width: "100%" }} />
        )}
      </ListItemButton>
      {allTheorics.map((teorico: any) => {
        return (
          <Collapse
            in={open}
            key={teorico._id}
            timeout="auto"
            unmountOnExit
            sx={{ width: "100%" }}
          >
            <Link href={`/Theoric/${teorico._id}`} underline="none">
              <List component="div" disablePadding sx={{ width: "100%" }}>
                <ListItemButton
                  style={{ fontFamily: "Helvetica", display: "flex" }}
                >
                  {teorico.title}
                </ListItemButton>
              </List>
            </Link>
          </Collapse>
        );
      })}
    </List>
  );
}
