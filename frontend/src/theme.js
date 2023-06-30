import { createTheme } from "@mui/material/styles";

export const mainTheme = createTheme({
  palette: {
    primary: {
      main: "#606060",
    },
    secondary: {
      main: "#00ACB0",
    },
  },

  typography: {
    fontFamily: ["Asap Condensed", "sans-serif"].join(","),
    fontSize: 13,
    button: {
      fontWeight: 700,
    },
  },
});
