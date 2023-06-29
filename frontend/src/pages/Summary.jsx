import React from 'react';

function Summary({ formData }) {
  return (
    <div>
      <h2>Récapitulatif des données</h2>
      <p>Modèle : {formData.model}</p>
      <p>Système d'exploitation : {formData.os}</p>
      <p>Mémoire RAM : {formData.ram_memory}</p>
      <p>Mémoire Taille écran : {formData.screen_size}</p>
      <p>Mémoire network : {formData.network}</p>
      <p>Mémoire stocage : {formData.storage}</p>
    </div>
  );
}

export default Summary;