import React from "react";
import { NavLink } from "react-router-dom"; // Utiliser NavLink
import logo from "../assets/logo.png";
// import Banner from "./Banner"; // Importer le composant Banner

const Header = () => {
  return (
    <header>
      <nav>
        <img src={logo} alt="Logo Kasa" />
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")} // Ajoute une classe "active"
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              À propos
            </NavLink>
          </li>
        </ul>
      </nav>
      {/* <Banner /> Insertion du composant Banner ici */}
    </header>
  );
};

export default Header;
