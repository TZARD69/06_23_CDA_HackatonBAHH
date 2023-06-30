import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import Box from '@mui/material/Box';


function Summary({ patientForm }) {

  return (
    <Card>
      <CardContent sx={{p: 5, width: "30px"}}>
        <Typography variant="h4" sx={{fontWeight:"medium", marginBottom:"27px"}}>Récapitulatif des données</Typography>

        <Box sx={{}}>
          <Typography>Modèle:</Typography>
          <Typography>{patientForm?.model}</Typography>

          <Typography>Système d'exploitation: </Typography>
          <Typography>{patientForm?.os}</Typography>

          <Typography>Mémoire RAM:</Typography>
          <Typography>{patientForm?.ram_memory}</Typography>

          <Typography>Taille d'écran:</Typography>
          <Typography>{patientForm?.screen_size}</Typography>

          <Typography>Réseau:</Typography>
          <Typography>{patientForm?.network}</Typography>

          <Typography>Stockage:</Typography>
          <Typography>{patientForm?.storage}</Typography>

          <Typography>Chargeur:</Typography>
          <Typography>{patientForm?.charger}</Typography>

        </Box>
      </CardContent>
    </Card>
  );
}

export default Summary;
