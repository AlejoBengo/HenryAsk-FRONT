/*--------------------------------------------------------*/
/*-----------IMPORT UTILITIES-----------*/
import React, { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import TheoricList from "../../Theoric/TheoricList";
import LateralItem from "./LateralItem";
import { Link } from "react-router-dom";
import { remoteUpdateUser } from "../../../app/Reducers/userSlice";
import { User } from "../../../app/interface";
import AcordeonMenu from "./AcordeonMenu";
/*-----------IMPORT MUI & CSS-----------*/
import {
  Stack,
  Collapse,
  Box,
  Drawer,
  Button,
  Divider,
  IconButton,
  Avatar,
  Typography,
  List,
  ListItem,
} from "@mui/material";
// import { StarsIcon } from "@mui/icons-material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { yellow } from "@mui/material/colors";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import ForumIcon from "@mui/icons-material/Forum";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import {
  StyledStack,
  StyledListItemButton,
  StyledListItemButton2,
} from "../../Theoric/StyledComponents";
import { LateralItemStyled, LinkDom } from "../../Style/StyledComponents";

/*--------------------------------------------------------*/

/*  <Stack>
      <TheoricList />
    </Stack> */

export default function LateralMenu(props: any) {
  const userLog = useAppSelector((state) => state.user.data);

  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer =
    (anchor: "left", open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: "left") => (
    <Box
      sx={{ width: 325 }}
      role="presentation"
      /* onClick={toggleDrawer(anchor, false)} */
      /* onKeyDown={toggleDrawer(anchor, false)} */
    >
      <Box
        width="100%"
        display="flex"
        justifyContent="center"
        textAlign="center"
        sx={{ height: "25vh" }}
      >
        <Box
          width="30%"
          sx={{ height: "15vh", margin: "2em 0em -1em 0em" }}
          flexDirection="column"
        >
          <Avatar
            alt={userLog.user_name}
            src={userLog.profile_picture}
            sx={{ width: "100%", height: "auto" }}
          />
          <Typography variant="subtitle1">{userLog.user_name}</Typography>
          <LinkDom
            onClick={toggleDrawer(anchor, false)}
            to={`/Profile/${userLog._id}`}
          >
            Ir al Perfil
          </LinkDom>
        </Box>
      </Box>
      <Divider />

      <List>
        <AcordeonMenu state={state} setState={setState} />
        <LinkDom onClick={toggleDrawer(anchor, false)} to="/Forum">
          <LateralItemStyled text="Foro" icon={<ForumIcon />} />
        </LinkDom>
        <LinkDom onClick={toggleDrawer(anchor, false)} to="/Content">
          <LateralItemStyled text="Material" icon={<MenuBookIcon />} />
        </LinkDom>
        <LinkDom onClick={toggleDrawer(anchor, false)} to="#">
          <LinkDom onClick={toggleDrawer(anchor, false)} to="#">
            <LateralItemStyled
              text="Henry Coins Ranking"
              // icon={<StarsIcon />}
            />
          </LinkDom>
        </LinkDom>
      </List>
      <Divider />

      <Stack sx={{ width: "100%" }}>
        <TheoricList />
        <TheoricList />
      </Stack>
    </Box>
  );

  return (
    <div>
      <React.Fragment key={"left"}>
        <IconButton
          onClick={toggleDrawer("left", true)}
          color="primary"
          aria-label="add to shopping cart"
        >
          <DashboardIcon sx={{ color: yellow[500], fontSize: "35px" }} />
        </IconButton>
        <Drawer
          anchor={"left"}
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
        >
          {list("left")}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
