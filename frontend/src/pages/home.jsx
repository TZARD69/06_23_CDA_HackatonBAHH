import React from "react";
import Box from "@mui/material/Box";
import Navbar from "../components/navbar";

import logo from "../assets/Ressources/logo-externatic.png";
import image1 from "../assets/Ressources/image1.svg";
import image2 from "../assets/Ressources/image2.svg";

function Home() {
  return (
    <div>
      <Navbar />
      <Box sx={{ p: 0.5, border: "1.5px solid black", borderRadius: 16 }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img
            src={logo}
            alt="logo entreprise externatic"
            style={{ transform: "scale(0.33)" }}
          />
        </div>
        <div>
          <div style={{ display: "flex" }}>
            <img
              src={image1}
              alt="people home page"
              style={{ transform: "scale(1.0)" }}
            />
            <div>
              <h2>Notre proximité</h2>
              <div>
                L’expérience professionnelle est une chose. L’expérience de vie
                en est une autre. Alors nos consultants prennent le temps de
                faire connaissance avec chaque personne, pour comprendre le
                contexte, le parcours, les envies et les projets.
              </div>
            </div>
          </div>
          <h2>Notre performance</h2>
          <div>
            Notre réseau est une force et nous y travaillons sans relâche. Notre
            expérience nous permet d’identifier les vrais besoins d’une
            entreprise et de ceux qui la rejoignent.
          </div>{" "}
          <h2>Notre durabilité</h2>
          <div>
            Notre challenge est de trouver l’équipe qui fonctionnera ensemble de
            manière professionnelle et personnelle, pour aller jusqu’au bout
            d’un projet commun. Notre responsabilité vis-à-vis des impacts de
            nos décisions et nos actions sur le long-terme correspondent
            également à notre politique RSE.
          </div>
        </div>
      </Box>
    </div>
  );
}
export default Home;
