import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import logo from "../assets/Ressources/logo-externatic.png";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function Navbar() {
  return (
    <Box sx={{ width: "100%" }}>
      <img src={logo} alt="logo entreprise externatic" />
      <Typography variant="h3">Plus qu'un cabinet de recrutement</Typography>
      <Box sx={{ width: "100%", maxWidth: 350 }}>
        <AppBar
          position="static"
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            backgroundColor: "lightGrey",
          }}
        >
          <Toolbar sx={{ backgroundColor: "lightGrey", color: "black" }}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Job offers"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Toolbar>
        </AppBar>
      </Box>
      <Box sx={{ width: "100%", maxWidth: 350 }}>
        <AppBar
          position="static"
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            backgroundColor: "lightGrey",
          }}
        >
          <Toolbar sx={{ backgroundColor: "lightGrey", color: "black" }}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Where ?"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Toolbar>
        </AppBar>
        <Button variant="contained" style={{ backgroundColor: "#CA2061" }}>
          RECHERCHE
        </Button>
      </Box>
      <Box>
        <FormControlLabel required control={<Checkbox />} label="CDD" />
        <FormControlLabel required control={<Checkbox />} label="CDI" />
        <FormControlLabel required control={<Checkbox />} label="Internship" />
        <FormControlLabel
          required
          control={<Checkbox />}
          label="Apprenticeship"
        />
        <FormControlLabel required control={<Checkbox />} label="Part-time" />
        <FormControlLabel required control={<Checkbox />} label="Full-time" />
      </Box>
    </Box>
  );
}
