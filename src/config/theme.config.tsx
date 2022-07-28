import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";

type ThemeProp = {
  children: JSX.Element;
};

export enum ThemePalette {
  BACKGROUND = "#1a202c",
  TYPO_GLOBAL = "'Albert Sans', sans-serif",
  TYPO_BLACK = "'Archivo Black', sans-serif",
  GREEN = "rgb(131, 217, 136)",
}

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: ThemePalette.BACKGROUND,
      paper: ThemePalette.BACKGROUND,
    },
    primary: {
      main: ThemePalette.GREEN,
    },
  },
  typography: {
    fontFamily: ThemePalette.TYPO_GLOBAL,
    h1: {
      fontFamily: ThemePalette.TYPO_BLACK,
      fontSize: "80px",
      color: ThemePalette.GREEN,
    },
    h2: {
      fontFamily: ThemePalette.TYPO_BLACK,
      fontSize: "60px",
    },
    h3: {
      fontFamily: ThemePalette.TYPO_BLACK,
      fontSize: "40px",
    },
    h4: {
      fontFamily: ThemePalette.TYPO_BLACK,
      fontSize: "30px",
    },

    body2: {
      fontSize: "18px",
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        style: {
          boxShadow: "none",
          borderRadius: "0.5em",
          textTransform: "none",
        },
      },
    },
    MuiOutlinedInput: {
      defaultProps: {
        style: {
          borderRadius: "0.5em",
        },
      },
    },
    MuiPaper: {
      defaultProps: {
        style: {
          boxShadow: "none",
        },
      },
    },
  },
});

export const ThemeConfig: React.FC<ThemeProp> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
