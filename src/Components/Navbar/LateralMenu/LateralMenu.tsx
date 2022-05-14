/*--------------------------------------------------------*/
/*-----------IMPORT UTILITIES-----------*/
import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import TheoricList from "../../Theoric/TheoricList";
import ExerciseList from "../../Excercise/ExerciseList";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import AcordeonMenu from "./AcordeonMenu";
import { fetchAllUsers } from "../../../app/Utils/allUsers";
/*-----------IMPORT MUI & CSS-----------*/
import {
  Stack,
  Box,
  Drawer,
  Divider,
  IconButton,
  Avatar,
  Typography,
  List,
} from "@mui/material";
import  StarsIcon  from "@mui/icons-material/Stars";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { yellow } from "@mui/material/colors";
import ForumIcon from "@mui/icons-material/Forum";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import { LateralItemStyled, LinkDom } from "../../Style/StyledComponents";
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
/*--------------------------------------------------------*/

export default function LateralMenu(props: any) {
  const userLog = useAppSelector((state) => state.user.data);
  const all = useAppSelector((state) => state.allUser.allUsers);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchAllUsers());
  }, []);

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
        sx={{ height: "30vh" }}
      >
        <Box
          width="37%"
          sx={{ 
            height: "100%", 
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
          flexDirection="column"
        >
          <Avatar
            alt={userLog.user_name}
            src={
              userLog.profile_picture.length > 0
                ? userLog.profile_picture
                : userLog.avatar
                ? userLog.avatar
                : userLog.profile_picture
            }
            sx={{ width: "6.25rem", height: "6.25rem" }}
          />
          <Typography variant="subtitle1">{userLog.user_name}</Typography>
          <LinkDom
            onClick={toggleDrawer(anchor, false)}
            to={`/Profile/${userLog._id}`}
          >
            <Typography variant="subtitle1">
            Ir al Perfil
            </Typography>
          </LinkDom>
        </Box>
      </Box>

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
              icon={<StarsIcon />}
            />
          </LinkDom>
        </LinkDom>
        <LinkDom onClick={toggleDrawer(anchor, false)} to="/Ask">
          <LateralItemStyled
            text="Crear nueva Discusión"
            icon={<NoteAddIcon />}
          />
        </LinkDom>
        {
          userLog.role >= 3 ? (
            <LinkDom onClick={toggleDrawer(anchor, false)} to="/Forum/News">
            <LateralItemStyled
              text="Foro Futuros Henry's"
              icon={<BookmarkAddIcon/>}
            />
          </LinkDom>
          ):null
        }
        {userLog.role === 5 ? (
          <LinkDom onClick={toggleDrawer(anchor, false)} to="/PanelAdm">
            <LateralItemStyled
              text="Panel de administrador"
              icon={<AdminPanelSettingsIcon />}
            />
          </LinkDom>
        ) : null}
      </List>
      <Divider />

      <Stack sx={{ width: "100%" }}>
        <TheoricList />
        <ExerciseList />
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
