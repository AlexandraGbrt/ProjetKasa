import React, { useState } from "react";
import arrowUp from "../assets/arrowUp.png";
import arrowDown from "../assets/arrowDown.png";

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  // Fonction pour basculer l'état entre ouvert et fermé
  const toggleCollapse = () => {
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
          onClick={toggleCollapse}
        />
      </button>
      {/* {isOpen && <p className="collapse-content">{content}</p>} */}
      <div className={`collapse-content ${isOpen ? "open" : ""}`}>
        {content}
      </div>
    </>
  );
}

export default Collapse;
