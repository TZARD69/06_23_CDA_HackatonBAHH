import { createTheme } from "@mui/material/styles";

export const mainTheme = createTheme({
  palette: {
    primary: {
      main: "#3E3E3E",
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
