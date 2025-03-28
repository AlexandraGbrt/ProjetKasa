import React, { useState } from "react";
import arrowUp from "../assets/arrowUp.png";
import arrowDown from "../assets/arrowDown.png";

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Fonction pour basculer l'état entre ouvert et fermé
  const changeCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button className="collapse-title">
        {title}
        <img
          src={isOpen ? arrowUp : arrowDown}
          className={`collapse-arrow ${isOpen ? "open" : ""}`}
          alt="arrow"
          onClick={changeCollapse}
        />
      </button>
      {/* {isOpen && <p className="collapse-content">{content}</p>} */}

      <div className={`collapse-content ${isOpen ? "open" : ""}`}>
        {/* Si le contenu est un tableau, afficher chaque élément dans une liste */}
        {Array.isArray(content) ? (
          <ul>
            {content.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p>{content}</p>
        )}
      </div>
    </>
  );
};

export default Collapse;
