import { PaletteMode } from "@mui/material";

export const createOptions = (mode: PaletteMode) => {
  return {
    palette: {
      mode,
      ...togglePalette(mode),
    },
  };
};

const togglePalette = (mode: string): object => {
  if (mode === "light") {
    return {
      primary: {
        main: "#ffd700",
      },
      secondary: {
        main: "#808080",
      },
      warning: {
        main: "#ef6c00",
      },
      info: {
        main: "#000000",
      },
      error: {
        main: "#A10702",
      },
      success: {
        main: "#00CC66",
      },
    };
  } else {
    return {
      primary: {
        main: "#ffd700",
      },
      secondary: {
        main: "#808080",
      },
      warning: {
        main: "#ef6c00",
      },
      info: {
        main: "#000000",
      },
      error: {
        main: "#A10702",
      },
      success: {
        main: "#00CC66",
      },
    };
  }
};
