import React from "react";
import { NavLink } from "react-router-dom"; // Utiliser NavLink
import logo from "../assets/logo.png";

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
    </header>
  );
};

export default Header;
