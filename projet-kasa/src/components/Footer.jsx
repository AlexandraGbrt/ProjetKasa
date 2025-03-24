import React from "react";
import logoFooter from "../assets/logoFooter.png";

const Footer = () => {
  return (
    <footer>
      <img className="logo-footer" src={logoFooter} alt="logo" />
      <p className="txt-footer">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
