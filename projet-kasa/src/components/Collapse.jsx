import React, { useState } from "react";
import arrowUp from "../assets/arrowUp.png";
import arrowDown from "../assets/arrowDown.png";

const Collapse = ({ title, content }) => {
  const [open, setOpen] = useState(false);

  // Fonction pour basculer entre ouvert et fermé
  const changeCollapse = () => {
    setOpen(!open);
  };

  return (
    <>
      <button className="collapse-title">
        {title}
        <img
          src={open ? arrowUp : arrowDown}
          className={`collapse-arrow ${open ? "open" : ""}`}
          alt="arrow"
          onClick={changeCollapse}
        />
      </button>

      <div className={`collapse-content ${open ? "open" : ""}`}>
        {/* Si contenu tableau : afficher chaque élément dans une liste */}
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
