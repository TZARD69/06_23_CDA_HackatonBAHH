import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import logo1 from "@assets/logo1.png";
import profil from "@assets/profil.png";
import menuBurger from "@assets/menuBurger.png";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import "../style/navbar.css";

export default function ButtonAppBar() {
  const drawerWidth = "100%";
  const drawerheight = "100%";

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const drawerItems = [
    {
      id: 0,
      text: "Ajouter un smartphone",
      link: "/acceuil",
    },
    {
      id: 1,
      text: "Base de données",
      link: "/basededonne",
    },
    {
      id: 2,
      text: "FAQ",
      link: "/faq",
    },
  ];

  return (
    <Box>
      <AppBar
        position="sticky"
        className="navBar"
        sx={{ bgcolor: "rgba(249, 249, 249, 1)", boxShadow: 1 }}
      >
        <Toolbar sx={{ justifyContent: "space-between", p: 0 }}>
          <div>
            <img className="logo1" src={logo1} alt="logo" />
          </div>

          <IconButton>
            <img src={profil} alt="profil" className="icon-profil" />
          </IconButton>

          <IconButton onClick={handleDrawerOpen}>
            <img src={menuBurger} alt="menu burger" className="menuBurger" />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        sx={{
          height: drawerheight,
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            height: drawerheight,
            bgcolor: "rgba(0, 172, 176, 1)",
          },
        }}
        variant="persistent"
        anchor="top"
        open={open}
      >
        <IconButton
          onClick={handleDrawerClose}
          sx={{ justifyContent: "flex-end" }}
        >
          <CloseRoundedIcon
            sx={{
              p: 1,
              height: 60,
              width: 60,
              color: "rgba(0, 39, 67, 1)",
            }}
          />
        </IconButton>

        <Box sx={{ height: "100%" }}>
          <List sx={{ mt: 6 }}>
            {drawerItems.map((text) => (
              <ListItem
                key={text.id}
                sx={{
                  flexDirection: "column",
                  color: "rgba(0, 39, 67, 1)",
                  fontWeight: "bold",
                  fontSize: 56,
                }}
              >
                <ListItemButton to={text.link}>
                  <ListItemText primary={text.text} />
                </ListItemButton>
              </ListItem>
            ))}

            <div>
              <img className="logo-footer" src={logo1} alt="logo" />
            </div>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}
