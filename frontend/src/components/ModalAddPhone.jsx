
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-use-before-define */


import Autocomplete from "@mui/material/Autocomplete";


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
      <Button onClick={handleOpen} />
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

            <Autocomplete
              {...defaultProps}
              id="disable-close-on-select"
              disableCloseOnSelect
              renderInput={(params) => (
                <TextField {...params} label="Stockage" variant="standard" />
              )}
            />
            <Autocomplete
              {...defaultProps}
              id="disable-close-on-select"
              disableCloseOnSelect
              renderInput={(params) => (
                <TextField {...params} label="Pondération" variant="standard" />
              )}
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

            variant="contained"
            sx={{
              width: "290px",
              ml: "20px",
              fontSize: "15px",
              borderRadius: "20px",
              color: "white",
              backgroundColor: "#00ACB0",
            }}
          >
            Ajouter
          </Button>

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


const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
  {
    title: "The Lord of the Rings: The Return of the King",
    year: 2003,
  },
  { title: "The Good, the Bad and the Ugly", year: 1966 },
  { title: "Fight Club", year: 1999 },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
  },
  {
    title: "Star Wars: Episode V - The Empire Strikes Back",
    year: 1980,
  },
  { title: "Forrest Gump", year: 1994 },
  { title: "Inception", year: 2010 },
  {
    title: "The Lord of the Rings: The Two Towers",
    year: 2002,
  },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: "Goodfellas", year: 1990 },
  { title: "The Matrix", year: 1999 },
  { title: "Seven Samurai", year: 1954 },
  {
    title: "Star Wars: Episode IV - A New Hope",
    year: 1977,
  },
  { title: "City of God", year: 2002 },
  { title: "Se7en", year: 1995 },
  { title: "The Silence of the Lambs", year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 },
  { title: "Life Is Beautiful", year: 1997 },
  { title: "The Usual Suspects", year: 1995 },
  { title: "Léon: The Professional", year: 1994 },
  { title: "Spirited Away", year: 2001 },
  { title: "Saving Private Ryan", year: 1998 },
  { title: "Once Upon a Time in the West", year: 1968 },
  { title: "American History X", year: 1998 },
  { title: "Interstellar", year: 2014 },
  { title: "Casablanca", year: 1942 },
  { title: "City Lights", year: 1931 },
  { title: "Psycho", year: 1960 },
  { title: "The Green Mile", year: 1999 },
  { title: "The Intouchables", year: 2011 },
  { title: "Modern Times", year: 1936 },
  { title: "Raiders of the Lost Ark", year: 1981 },
  { title: "Rear Window", year: 1954 },
  { title: "The Pianist", year: 2002 },
  { title: "The Departed", year: 2006 },
  { title: "Terminator 2: Judgment Day", year: 1991 },
  { title: "Back to the Future", year: 1985 },
  { title: "Whiplash", year: 2014 },
  { title: "Gladiator", year: 2000 },
  { title: "Memento", year: 2000 },
  { title: "The Prestige", year: 2006 },
  { title: "The Lion King", year: 1994 },
  { title: "Apocalypse Now", year: 1979 },
  { title: "Alien", year: 1979 },
  { title: "Sunset Boulevard", year: 1950 },
  {
    title:
      "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
    year: 1964,
  },
  { title: "The Great Dictator", year: 1940 },
  { title: "Cinema Paradiso", year: 1988 },
  { title: "The Lives of Others", year: 2006 },
  { title: "Grave of the Fireflies", year: 1988 },
  { title: "Paths of Glory", year: 1957 },
  { title: "Django Unchained", year: 2012 },
  { title: "The Shining", year: 1980 },
  { title: "WALL·E", year: 2008 },
  { title: "American Beauty", year: 1999 },
  { title: "The Dark Knight Rises", year: 2012 },
  { title: "Princess Mononoke", year: 1997 },
  { title: "Aliens", year: 1986 },
  { title: "Oldboy", year: 2003 },
  { title: "Once Upon a Time in America", year: 1984 },
  { title: "Witness for the Prosecution", year: 1957 },
  { title: "Das Boot", year: 1981 },
  { title: "Citizen Kane", year: 1941 },
  { title: "North by Northwest", year: 1959 },
  { title: "Vertigo", year: 1958 },
  {
    title: "Star Wars: Episode VI - Return of the Jedi",
    year: 1983,
  },
  { title: "Reservoir Dogs", year: 1992 },
  { title: "Braveheart", year: 1995 },
  { title: "M", year: 1931 },
  { title: "Requiem for a Dream", year: 2000 },
  { title: "Amélie", year: 2001 },
  { title: "A Clockwork Orange", year: 1971 },
  { title: "Like Stars on Earth", year: 2007 },
  { title: "Taxi Driver", year: 1976 },
  { title: "Lawrence of Arabia", year: 1962 },
  { title: "Double Indemnity", year: 1944 },
  {
    title: "Eternal Sunshine of the Spotless Mind",
    year: 2004,
  },
  { title: "Amadeus", year: 1984 },
  { title: "To Kill a Mockingbird", year: 1962 },
  { title: "Toy Story 3", year: 2010 },
  { title: "Logan", year: 2017 },
  { title: "Full Metal Jacket", year: 1987 },
  { title: "Dangal", year: 2016 },
  { title: "The Sting", year: 1973 },
  { title: "2001: A Space Odyssey", year: 1968 },
  { title: "Singin' in the Rain", year: 1952 },
  { title: "Toy Story", year: 1995 },
  { title: "Bicycle Thieves", year: 1948 },
  { title: "The Kid", year: 1921 },
  { title: "Inglourious Basterds", year: 2009 },
  { title: "Snatch", year: 2000 },
  { title: "3 Idiots", year: 2009 },
  { title: "Monty Python and the Holy Grail", year: 1975 },
];

