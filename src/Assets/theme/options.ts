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
      title: {
        main: "black", //blanco humo
      },
      primary: {
        main: "#ffd700", //yellow
      },
      secondary: {
        main: "#000000", //grey
      },
      warning: {
        main: "#ef6c00", // orange
      },
      info: {
        main: "#000000", //black
      },
      error: {
        main: "#A10702", //red
      },
      success: {
        main: "#00CC66", //green
      },
      background: {
        main: "whitesmoke", //blanco humo
      },
      border: {
        main: "black", //dorde div
      },
    };
  } else {
    return {
      title: {
        main: "yellow", //blanco humo
      },
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
        main: "#E61D16",
      },
      success: {
        main: "#00CC66",
      },
      background: {
        main: "#121212",
      },
      border: {
        main: "yellow", //dorde div
      },
    };
  }
};
