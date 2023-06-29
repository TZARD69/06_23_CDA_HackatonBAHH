import React from 'react';
import { Typography, Button } from "@mui/material";
import CardMedia from '@mui/material/CardMedia';
import ModalAddPhone from "@components/ModalAddPhone";
import { Box } from "@mui/system";

export default function Home({form}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}>
      <Typography variant="h3" sx={{ fontWeight: 500, p: "5px" }}>
        Donnez une 2e vie solidaire à votre{" "}
        <span style={{ color: "#E62460" }}>smartphone</span>
      </Typography>
      <Typography variant="h4" sx={{ fontWeight: 400, p: "10px" }}>
        Notre formulaire en ligne vous permet de qualifier le matériel en
        quelques instants.
      </Typography>
      <Box sx={{ p: "20px" }}>

        <Button
         open={open} handleClose={handleClose} 
         formular={form}
          variant="contained"
          sx={{
            textAlign:"center",
            borderRadius: "16px",
            color: "white",
            backgroundColor: "#E62460",
          }}
        >
          <ModalAddPhone />
          Ajouter un smartphone
          
        </Button>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 360, p: "20px" }}
        image="./src/assets/homeimg.png"
        alt="home img"
      />
      <Box sx={{ marginTop: "100px" }}>
        <Typography variant="h3" sx={{ fontWeight: 500, p: "5px" }}>
          Accède à notre <span style={{ color: "#00ACB0" }}>base de donée</span>
        </Typography>
        <Typography variant="h4" sx={{ fontWeight: 400, p: "10px" }}>
          Accède à notre base de données de smartphones et découvre toutes les
          informations détaillées.
        </Typography>
        <Box sx={{ p: "20px" }}>
          <Button
            onClick={handleOpen}
            variant="contained"
            sx={{
              width: "100px",
              borderRadius: "16px",
              color: "white",
              backgroundColor: "#E62460",
            }}
          >
            Accèder
          </Button>
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 360, p: "20px" }}
        image="./src/assets/home2.png"
        alt="home img"
      />
    </Box>
  );
}
