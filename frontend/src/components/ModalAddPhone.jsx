import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Summary from '@pages/Summary';


const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "290",
    bgcolor: "background.paper",
    border: "bold",
    boxShadow: 24,
    p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [showSummary, setShowSummary] = useState(false);

  const [patientForm, setPatientForm] = useState({
    model: "",
    os: "",
    ram_memory: "",
    storage: "",
    screen_size: "",
    network: "",
    charger: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Effectue les actions souhaitées avec les données du formulaire
    console.log(patientForm);
    setShowSummary(true);
    // ...
  };


  return (
    <div>
      <Button onClick={handleOpen}></Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            variant="h6"
            sx={{ fontWeight: 500, p: "10px", ml: "28px", marginTop: "15px" }}
          >
            Remplissez les champs ci-dessous pour évaluer le smartphone:
          </Typography>
          <Stack spacing={2} sx={{ width: 250, ml: "28px" }}>
            <TextField
              label="Model"
              variant="outlined"
              InputLabelProps={{ shrink: true }}
              type="text"
              fullWidth
              required
              margin="normal"
              value={patientForm.model}
              onChange={(e) =>
                setPatientForm({ ...patientForm, model: e.target.value })
              }
            />
            <TextField
              label="os"
              variant="outlined"
              InputLabelProps={{ shrink: true }}
              type="text"
              fullWidth
              required
              margin="normal"
              value={patientForm.os}
              onChange={(e) =>
                setPatientForm({ ...patientForm, os: e.target.value })
              }
            />
            <TextField
              label="ram_memory"
              variant="outlined"
              InputLabelProps={{ shrink: true }}
              type="text"
              fullWidth
              required
              margin="normal"
              value={patientForm.ram_memory}
              onChange={(e) =>
                setPatientForm({ ...patientForm, ram_memory: e.target.value })
              }
            />
            <TextField
              label="storage"
              variant="outlined"
              InputLabelProps={{ shrink: true }}
              type="text"
              fullWidth
              required
              margin="normal"
              value={patientForm.storage}
              onChange={(e) =>
                setPatientForm({ ...patientForm, storage: e.target.value })
              }
            />
            <TextField
              label="screen_size"
              variant="outlined"
              InputLabelProps={{ shrink: true }}
              type="text"
              fullWidth
              required
              margin="normal"
              value={patientForm.screen_size}
              onChange={(e) =>
                setPatientForm({ ...patientForm, screen_size: e.target.value })
              }
            />
            <TextField
              label="network"
              variant="outlined"
              InputLabelProps={{ shrink: true }}
              type="text"
              fullWidth
              required
              margin="normal"
              value={patientForm.network}
              onChange={(e) =>
                setPatientForm({ ...patientForm, network: e.target.value })
              }
            />
            <Box sx={{ mariginTop: "20px" }}>
              <Typography
                variant="body2"
                sx={{
                  fontWeight: 300,
                  fontSize: 18,
                }}
              >
                Chargeur et câble ?
              </Typography>
            </Box>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              sx={{ display: "inline-flex" }}
            >
              <FormControlLabel value="yes" control={<Radio />} label="Oui" />
              <FormControlLabel value="no" control={<Radio />} label="Non" />
            </RadioGroup>
          </Stack>
          <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleSubmit}
          sx={{ mt: 3, mb: 2, backgroundColor:"#00ACB0", borderRadius:"20px"}}
        >
          Envoyer
        </Button>
        </Box>
      </Modal>
      {showSummary && <Summary formData={patientForm} />}
    </div>
  );
}


  