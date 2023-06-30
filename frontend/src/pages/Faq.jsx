import React from "react";
import rectangle from "@assets/rectangle.png";
import group from "@assets/group.png";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "../style/faq.css";

function Faq() {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    bgcolor: "background.paper",
    border: "1px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [open1, setOpen1] = React.useState(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);
  return (
    <div>
      <header>
        <div className="bgcolor-Faq">
          <h1 className="Title-faq">Peut-on vous offrir notre aide ?</h1>
        </div>
        <img className="rectangle" src={rectangle} alt="rectangle" />
        <img className="group" src={group} alt="group" />
      </header>
      <div>
        <div className="h-faq">
          <h1>FAQ</h1>
          <h2>Les questions fréquentes :</h2>
        </div>
        <div className="question">
          <div className="question1">
            <Button
              onClick={handleOpen}
              sx={{
                color: "rgba(0, 39, 67, 1)",
                fontSize: "large",
                width: 340,
                height: 70,
                border: "solid 2px rgba(0, 39, 67, 1)",
              }}
            >
              Comment ajouter un nouveau smartphone ?
            </Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Comment ajouter un nouveau smartphone ?
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Pour ajouter un nouveau smartphone, rends-toi dans le menu en
                  haut a droite , ajouter un smartphone , remplissez les champs
                  vide et click sur validé.
                </Typography>
              </Box>
            </Modal>
          </div>
          <div>
            <Button
              onClick={handleOpen1}
              sx={{
                color: "rgba(0, 39, 67, 1)",
                fontSize: "large",
                width: 340,
                height: 70,
                border: "solid 2px rgba(0, 39, 67, 1)",
              }}
            >
              Comment avoir accès à la Base de Données ?
            </Button>
            <Modal
              open={open1}
              onClose={handleClose1}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Comment avoir accès à la Base de Données ?
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Pour avoir accès à la Base de Données, rends-toi dans le menu
                  en haut a droite , base de données et telecharger le
                  documment.
                </Typography>
              </Box>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
