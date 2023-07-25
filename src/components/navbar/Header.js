import React, { useState, useEffect } from "react";
import "./header.css";
import logoResponsiv from "../../assets/images/logoResponsiv.png";

const NavBar = () => {
  // Déclaration des états avec les hooks useState
  const [bounceMap, setBounceMap] = useState({
    accueil: false,
    aPropos: false,
    experiences: false,
    competences: false,
    portfolio: false,
    contact: false,
  });
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [headerOffset, setHeaderOffset] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("none");

  // Fonction qui lance le retour d'animation "bounce" quand on retir la souris
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

  // Fonction pour gérer l'ouverture et la fermeture du menu en format mobile
  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Utilisation du hook useEffect pour gérer le scroll et la gestion du mouvement du header
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (windowWidth > 768) {
        if (currentScrollPos > prevScrollPos) {
          setScrollDirection("down");
          setHeaderOffset(-80);
          document.querySelector("header").classList.add("hide-header");
        } else {
          setScrollDirection("up");
          setHeaderOffset(0);
          document.querySelector("header").classList.remove("hide-header");
        }
      }

      setPrevScrollPos(currentScrollPos);
    };

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    // Reset pour un fonctionnement optimale en format mobile
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [prevScrollPos, headerOffset, windowWidth]);

  return (
    <header
      className={`flexBetween flexCenter ${isMenuOpen ? "menu-open" : ""} ${
        windowWidth <= 768 && !isMenuOpen ? "hide-header" : ""
      }`}
    >
      <div
        className={`toggle-btn ${isMenuOpen ? "active" : ""}`}
        id="btn"
        onClick={handleToggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <img src={logoResponsiv} alt="logo-computer" className="logo-responsiv" />
      <ul className="nav-link flexBetween">
        <li
          className={`${bounceMap.accueil ? "bounce" : ""} `}
          onMouseLeave={() => handleMouseLeave("accueil")}
        >
          <a href="#acceuil">ACCUEIL</a>
        </li>
        <li
          className={`${bounceMap.aPropos ? "bounce" : ""} `}
          onMouseLeave={() => handleMouseLeave("aPropos")}
        >
          <a href="#apropos">À PROPOS</a>
        </li>
        <li
          className={`${bounceMap.competences ? "bounce" : ""}`}
          onMouseLeave={() => handleMouseLeave("competences")}
        >
          <a href="#competences">COMPÉTENCES</a>
        </li>
        <li
          className={`${bounceMap.portfolio ? "bounce" : ""} `}
          onMouseLeave={() => handleMouseLeave("portfolio")}
        >
          <a href="#projets">PROJETS</a>
        </li>
        <li
          className={`${bounceMap.contact ? "bounce" : ""}`}
          onMouseLeave={() => handleMouseLeave("contact")}
        >
          <a href="#contact">CONTACTS</a>
        </li>
      </ul>
    </header>
  );
};

export default NavBar;
