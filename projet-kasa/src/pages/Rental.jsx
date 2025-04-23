import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import logementsData from "../../data/logements.json";
import Collapse from "../components/Collapse";
import Tag from "../components/Tag";
import Rating from "../components/Rating";
import Carrousel from "../components/Carrousel";

const Rental = () => {
  const { id } = useParams(); // Récupère l'ID depuis l'URL
  const [logement, setLogement] = useState(null);
  const navigate = useNavigate(); // Navigate pour erreur d'Id ci dessous

  useEffect(() => {
    // Recherche le logement avec l'ID correspondant
    const logementFind = logementsData.find((logement) => logement.id === id);
    setLogement(logementFind);

    if (!logementFind) {
      navigate("/error");
    }
  }, [id, navigate]);

  if (!logement) {
    return null;
  }

  return (
    <main className="rental">
      <section className="carrousel">
        {/* utilisation props "slides" pour le carrousel */}
        <Carrousel slides={logement.pictures} />
      </section>

      <section className="rental-content">
        <div className="rental-info">
          <h2>{logement.title}</h2>
          <p>{logement.location}</p>
          <Tag tags={logement.tags} />
        </div>

        <div className="rental-host">
          <div className="host-info">
            <p>{logement.host.name}</p>
            <img src={logement.host.picture} />
          </div>
          <Rating score={logement.rating} />
        </div>
      </section>

      <section className="collapse-rental">
        <div className="collapse">
          <Collapse
            title="Description"
            content={logement.description}
          ></Collapse>
        </div>
        <div className="collapse">
          <Collapse
            title="Équipements"
            content={logement.equipments}
          ></Collapse>
        </div>
      </section>
    </main>
  );
};

export default Rental;
