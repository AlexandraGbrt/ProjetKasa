import React from "react";
import { Link } from "react-router-dom";

//prop {logement}
const Card = ({ logement }) => {
  return (
    <Link to={`/Rental/${logement.id}`} className="card-a">
      <div className="card">
        <img src={logement.cover} alt={logement.title} />
        <h3>{logement.title}</h3>
        <div className="overlay"></div>
      </div>
    </Link>
  );
};

export default Card;
