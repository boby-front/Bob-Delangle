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

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (currentScrollPos > prevScrollPos) {
        setHeaderOffset(Math.max(headerOffset - 101, -101));
      } else {
        setHeaderOffset(Math.min(headerOffset + 101, 0));
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos, headerOffset]);

  return (
    <header
      className="flexBetween flexCenter"
      style={{ transform: `translateY(${headerOffset}px)` }}
    >
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
          className={bounceMap.competences ? "bounce" : ""}
          onMouseLeave={() => handleMouseLeave("competences")}
        >
          COMPÉTENCES
        </li>
        <li
          className={bounceMap.portfolio ? "bounce" : ""}
          onMouseLeave={() => handleMouseLeave("portfolio")}
        >
          PROJETS
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
