import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#090909",
      paper: "transparent",
    },
    primary: {
      main: "#f5f5f0",
    },
    secondary: {
      main: "#4f8e3e",
    },
    text: {
      primary: "#f5f5f0",
      secondary: "rgba(255,255,255,0.4)",
      disabled: "rgba(255,255,255,0.2)",
    },
  },
  typography: {
    fontFamily: "'DM Sans', helvetica, arial, sans-serif",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#090909",
          margin: 0,
          padding: 0,
          overflowX: "hidden",
        },
        "@keyframes blink": {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0 },
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;