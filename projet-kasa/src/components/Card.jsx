import React from "react";
import { Link } from "react-router-dom";

//prop {logement}
const Card = ({ logement }) => {
  return (
    <Link to={`/Rental/${logement.id}`} className="card-a">
      <div className="card">
        <div className="card-img">
          <img src={logement.cover} alt={logement.title} />
          <div className="overlay"></div>
        </div>
        <div className="card-txt">
          <h3>{logement.title}</h3>
        </div>
      </div>
    </Link>
  );
};

export default Card;
