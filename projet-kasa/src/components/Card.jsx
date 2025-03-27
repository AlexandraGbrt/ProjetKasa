import React from "react";

//prop {logement}
const Card = ({ logement }) => {
  return (
    <div className="card">
      <img src={logement.cover} alt={logement.title} />
      <h3>{logement.title}</h3>
      <div className="overlay"></div>
    </div>
  );
};

export default Card;
