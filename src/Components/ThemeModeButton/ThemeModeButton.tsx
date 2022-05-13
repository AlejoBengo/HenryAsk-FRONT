import React from "react";
import { Switch } from "@mui/material";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { toggleMode } from "../../app/Reducers/modeReducer";
import { LightMode, DarkMode } from "@mui/icons-material";
export const ThemeModeButton = () => {
  const dispatch = useAppDispatch();
  const mode = useAppSelector((state) => state.mode.mode);
  return (
    <Switch
      onChange={(e) => dispatch(toggleMode())}
      checked={mode === "dark"}
      icon={<LightMode color="primary" />}
      checkedIcon={<DarkMode color="primary" />}
      color="secondary"
      sx={{
        width: "70px",
        marginTop: "15px",
        paddingRight: "25px",
        height: "50px",
        paddingBottom: "25px",
        "& .MuiSwitch-track": {
          backgroundColor: "secondary.light",
        },
        "& .MuiSwitch-switchBase:hover": {
          backgroundColor: " rgba(128, 128, 128, 0.2)",
          zIndex: "2",
        },
      }}
    />
  );
};
export default ThemeModeButton;
