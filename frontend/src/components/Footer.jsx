import { Typography } from "@mui/material";
import React from "react";

function Footer() {
  const footerStyles = {
    backgroundColor: "#002743",
    color: "white",
    padding: "30px",
    height: "40px",
  };

  return (
    <footer style={footerStyles}>
      <div>
        <Typography>Mentions légales</Typography>
        <Typography>Politique de confidentialité</Typography>
        <Typography>© Emmaüs Connect avec LaCollecte.tech</Typography>
      </div>
    </footer>
  );
}

export default Footer;
