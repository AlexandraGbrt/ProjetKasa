import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import logementsData from "../../data/logements.json";
import Collapse from "../components/Collapse";
import Tag from "../components/Tag";

const Rental = () => {
  const { id } = useParams(); // Récupère l'ID depuis l'URL
  const [logement, setLogement] = useState(null);

  useEffect(() => {
    // Recherche le logement avec l'ID correspondant
    const logementTrouve = logementsData.find((logement) => logement.id === id);
    setLogement(logementTrouve);
  }, [id]);

  if (!logement) {
    return <div>Chargement...</div>;
  }

  return (
    <main className="rental">
      <section className="carrousel">
        <img src={logement.cover} alt="img-card" />
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
          <p>{logement.rating}</p>
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
