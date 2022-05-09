import React from "react";
import { Switch } from "@mui/material";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { toggleMode } from "../../app/Reducers/modeReducer";
import { LightMode, DarkMode } from "@mui/icons-material";
export const ThemeModeButton = () => {
  const dispatch = useAppDispatch();
  const mode = useAppSelector((state) => state.mode);
  return (
    <Switch
      onChange={(e) => dispatch(toggleMode())}
      icon={<LightMode color="primary" />}
      checkedIcon={<DarkMode color="primary" />}
      color="secondary"
    />
  );
};
export default ThemeModeButton;
