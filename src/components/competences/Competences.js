import React, { useEffect, useRef, useState } from "react";
import "./competence.css";
import html from "../../assets/logo_skill/html.png";
import css from "../../assets/logo_skill/css.png";
import js from "../../assets/logo_skill/js.png";
import sass from "../../assets/logo_skill/sass.png";
import node from "../../assets/logo_skill/node.png";
import react from "../../assets/logo_skill/react.png";
import figma from "../../assets/logo_skill/figma.png";

const Competences = () => {
  const [cardClicked, setCardClicked] = useState(false);
  const [cardBackground, setCardBackground] = useState("");

  const [animationTriggered, setAnimationTriggered] = useState(false);
  const articleRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!animationTriggered && articleRef.current) {
        const rect = articleRef.current.getBoundingClientRect();
        const scrollPosition = window.innerHeight + window.pageYOffset;

        if (scrollPosition > rect.top + window.pageYOffset) {
          setAnimationTriggered(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [animationTriggered]);

  return (
    <article
      ref={articleRef}
      className={`article-competence ${
        animationTriggered ? "animation-triggered" : ""
      }`}
    >
      <h1 className="animate-left-to-right opacity-transition">
        Mes compétences
      </h1>
      <div className="line"></div>
      <p className="animate-right-to-left hover-info opacity-transition">
        Survolez mes compétences pour découvrir mes skills. Cliquez, vous savez.
      </p>
      <section className="skill-cards">
        <div
          className={`card ${cardClicked ? "clicked" : ""}`}
          onClick={() => {
            setCardClicked(!cardClicked);
            setCardBackground("#b77de6");
          }}
        >
          <img src={html} alt="" />
          <div
            className={`skill-info ${cardClicked ? "active" : ""}`}
            style={{ backgroundColor: cardBackground }}
          >
            <h2>HTML</h2>
            <p>60 %</p>
          </div>
        </div>

        <div className="card">
          <img src={css} alt="" />
          <div className="skill-info">
            <h2></h2>
            <p></p>
          </div>
        </div>

        <div className="card">
          <img src={sass} alt="" />
          <div className="skill-info">
            <h2></h2>
            <p></p>
          </div>
        </div>

        <div className="card">
          <img src={js} alt="" />
          <div className="skill-info">
            <h2></h2>
            <p></p>
          </div>
        </div>

        <div className="card">
          <img src={node} alt="" />
          <div className="skill-info">
            <h2></h2>
            <p></p>
          </div>
        </div>

        <div className="card">
          <img src={react} alt="" />
          <div className="skill-info">
            <h2></h2>
            <p></p>
          </div>
        </div>

        <div className="card">
          <img src={figma} alt="" />
          <div className="skill-info">
            <h2></h2>
            <p></p>
          </div>
        </div>
      </section>
    </article>
  );
};

export default Competences;
