import React, { useState, useEffect } from "react";
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
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [headerOffset, setHeaderOffset] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLinkClicked, setIsLinkClicked] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("none");

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

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsLinkClicked(false);
  };

  const handleLinkClick = () => {
    setIsLinkClicked(true);
    setIsMenuOpen(false);
  };

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

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [prevScrollPos, headerOffset, windowWidth]);

  return (
    <div className="root">
      <header
        className={`flexBetween flexCenter ${isMenuOpen ? "menu-open" : ""} ${
          (windowWidth <= 768 && !isMenuOpen) || isLinkClicked
            ? "hide-header"
            : ""
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
        <img
          src={logoResponsiv}
          alt="logo-computer"
          className="logo-responsiv"
        />
        <ul className="nav-link flexBetween">
          <li
            className={`${bounceMap.accueil ? "bounce" : ""} ${
              isLinkClicked ? "active" : ""
            }`}
            onMouseLeave={() => handleMouseLeave("accueil")}
            onClick={handleLinkClick}
          >
            <a href="#acceuil">ACCUEIL</a>
          </li>
          <li
            className={`${bounceMap.aPropos ? "bounce" : ""} ${
              isLinkClicked ? "active" : ""
            }`}
            onMouseLeave={() => handleMouseLeave("aPropos")}
            onClick={handleLinkClick}
          >
            <a href="#apropos">À PROPOS</a>
          </li>
          <li
            className={`${bounceMap.competences ? "bounce" : ""} ${
              isLinkClicked ? "active" : ""
            }`}
            onMouseLeave={() => handleMouseLeave("competences")}
            onClick={handleLinkClick}
          >
            <a href="#competences">COMPÉTENCES</a>
          </li>
          <li
            className={`${bounceMap.portfolio ? "bounce" : ""} ${
              isLinkClicked ? "active" : ""
            }`}
            onMouseLeave={() => handleMouseLeave("portfolio")}
            onClick={handleLinkClick}
          >
            <a href="#projets">PROJETS</a>
          </li>
          <li
            className={`${bounceMap.contact ? "bounce" : ""} ${
              isLinkClicked ? "active" : ""
            }`}
            onMouseLeave={() => handleMouseLeave("contact")}
            onClick={handleLinkClick}
          >
            <a href="#contact">CONTACTS</a>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default NavBar;
