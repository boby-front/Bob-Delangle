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
  const [headerOffset, setHeaderOffset] = useState(-250);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (windowWidth >= 768) {
        if (currentScrollPos > prevScrollPos) {
          setHeaderOffset(Math.max(headerOffset - 101, -101));
        } else {
          setHeaderOffset(Math.min(headerOffset + 101, 0));
        }
      } else {
        setHeaderOffset(0);
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
    <header
      className={`flexBetween flexCenter ${isMenuOpen ? "menu-open" : ""}`}
      style={{
        transform:
          windowWidth <= 769
            ? `translateX(${
                isMenuOpen ? "0" : "-250px"
              }) translateY(${headerOffset}px)`
            : "none",
      }}
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
          className={bounceMap.accueil ? "bounce" : ""}
          onMouseLeave={() => handleMouseLeave("accueil")}
        >
          ACCUEIL
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
