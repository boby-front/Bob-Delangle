import React from "react";
import "./navbar.css";
import logoResponsiv from "../../assets/images/logoResponsiv.png";

const NavBar = () => {
  return (
    <nav className="flexBetween flexCenter">
      <img src={logoResponsiv} alt="" className="logo-responsiv" />
      <ul className="nav-link flexBetween">
        <li>ACCEUIL</li>
        <li>À PROPOS</li>
        <li>EXPÉRIENCES</li>
        <li>COMPÉTENCES</li>
        <li>PORTFOLIO</li>
        <li>CONTACT</li>
      </ul>
    </nav>
  );
};

export default NavBar;
