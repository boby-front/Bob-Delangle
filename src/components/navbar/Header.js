import React, { useState } from "react";
import "./header.css";
import logoResponsiv from "../../assets/images/logoResponsiv.png";

const NavBar = () => {
  const [bounceMap, setBounceMap] = useState({
    accueil: false,
    aPropos: false,
    experiences: false,
    competences: false,
    portfolio: false,
    contact: false,
  });

  const handleMouseLeave = (item) => {
    setBounceMap((prevState) => ({
      ...prevState,
      [item]: true,
    }));

    setTimeout(() => {
      setBounceMap((prevState) => ({
        ...prevState,
        [item]: false,
      }));
    }, 500);
  };

  return (
    <header className="flexBetween flexCenter">
      <img src={logoResponsiv} alt="" className="logo-responsiv" />
      <ul className="nav-link flexBetween">
        <li
          className={bounceMap.accueil ? "bounce" : ""}
          onMouseLeave={() => handleMouseLeave("accueil")}
        >
          ACCEUIL
        </li>
        <li
          className={bounceMap.aPropos ? "bounce" : ""}
          onMouseLeave={() => handleMouseLeave("aPropos")}
        >
          À PROPOS
        </li>
        <li
          className={bounceMap.experiences ? "bounce" : ""}
          onMouseLeave={() => handleMouseLeave("experiences")}
        >
          EXPÉRIENCES
        </li>
        <li
          className={bounceMap.competences ? "bounce" : ""}
          onMouseLeave={() => handleMouseLeave("competences")}
        >
          COMPÉTENCES
        </li>
        <li
          className={bounceMap.portfolio ? "bounce" : ""}
          onMouseLeave={() => handleMouseLeave("portfolio")}
        >
          PORTFOLIO
        </li>
        <li
          className={bounceMap.contact ? "bounce" : ""}
          onMouseLeave={() => handleMouseLeave("contact")}
        >
          CONTACT
        </li>
      </ul>
    </header>
  );
};

export default NavBar;
