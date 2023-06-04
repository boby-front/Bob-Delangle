import React, { useEffect, useRef, useState } from "react";
import "./competence.css";
import html from "../../assets/logo_skill/html.png";
import css from "../../assets/logo_skill/css.png";
import js from "../../assets/logo_skill/js.png";
import sass from "../../assets/logo_skill/sass.png";
import node from "../../assets/logo_skill/node.png";
import react from "../../assets/logo_skill/react.png";
import figma from "../../assets/logo_skill/figma.png";
import swagger from "../../assets/logo_skill/swagger.png";
import github from "../../assets/logo_skill/github.png";
import vscode from "../../assets/logo_skill/vscode.png";
import devtool from "../../assets/logo_skill/devtool.png";

const Competences = () => {
  const [animationTriggered, setAnimationTriggered] = useState(false);
  const [activeCardIndex, setActiveCardIndex] = useState(null);

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

  const toggleCardActive = (index) => {
    if (index === activeCardIndex) {
      setActiveCardIndex(null);
    } else {
      setActiveCardIndex(index);
    }
  };

  return (
    <article
      ref={articleRef}
      className={`article-competence ${
        animationTriggered ? "animation-triggered" : ""
      }`}
    >
      <h1 className="animate-left-to-right opacity-transition">
        Mes compétences & outils
      </h1>
      <div className="line"></div>
      <p className="animate-right-to-left hover-info opacity-transition">
        Survolez mes compétences pour découvrir mes connaissances. Cliquez, vous
        savez.
      </p>
      <div className="skill-cards-container">
        <section className="skill-cards">
          <div
            className={`card ${activeCardIndex === 0 ? "active" : ""}`}
            onClick={() => toggleCardActive(0)}
          >
            <img src={html} alt="" />
            <div className="skill-info">
              <h2>HTML</h2>
              <p>Avancé</p>
            </div>
          </div>

          <div
            className={`card ${activeCardIndex === 1 ? "active" : ""}`}
            onClick={() => toggleCardActive(1)}
          >
            <img src={css} alt="" />
            <div className="skill-info">
              <h2>CSS</h2>
              <p>Avancé</p>
            </div>
          </div>

          <div
            className={`card ${activeCardIndex === 2 ? "active" : ""}`}
            onClick={() => toggleCardActive(2)}
          >
            <img src={sass} alt="" />
            <div className="skill-info">
              <h2>SASS</h2>
              <p>Intermédiaire</p>
            </div>
          </div>

          <div
            className={`card ${activeCardIndex === 3 ? "active" : ""}`}
            onClick={() => toggleCardActive(3)}
          >
            <img src={js} alt="" />
            <div className="skill-info">
              <h2>JS</h2>
              <p>Avancé</p>
            </div>
          </div>

          <div
            className={`card ${activeCardIndex === 4 ? "active" : ""}`}
            onClick={() => toggleCardActive(4)}
          >
            <img src={react} alt="" />
            <div className="skill-info">
              <h2>React</h2>
              <p>Intermédiaire</p>
            </div>
          </div>

          <div
            className={`card ${activeCardIndex === 5 ? "active" : ""}`}
            onClick={() => toggleCardActive(5)}
          >
            <img src={node} alt="" />
            <div className="skill-info">
              <h2>Node.JS</h2>
              <p>Débutant</p>
            </div>
          </div>
        </section>

        <section className="skill-cards">
          <div
            className={`card ${activeCardIndex === 6 ? "active" : ""}`}
            onClick={() => toggleCardActive(6)}
          >
            <img src={devtool} alt="" />
            <div className="skill-info">
              <h2>DevTool</h2>
              <p>Avancé</p>
            </div>
          </div>

          <div
            className={`card ${activeCardIndex === 7 ? "active" : ""}`}
            onClick={() => toggleCardActive(7)}
          >
            <img src={swagger} alt="" />
            <div className="skill-info">
              <h2>Swagger</h2>
              <p>Débutant</p>
            </div>
          </div>
          <div
            className={`card ${activeCardIndex === 8 ? "active" : ""}`}
            onClick={() => toggleCardActive(8)}
          >
            <img src={github} alt="" />
            <div className="skill-info">
              <h2>Github</h2>
              <p>Intermédiaire</p>
            </div>
          </div>

          <div
            className={`card ${activeCardIndex === 9 ? "active" : ""}`}
            onClick={() => toggleCardActive(9)}
          >
            <img src={figma} alt="" />
            <div className="skill-info">
              <h2>Figma</h2>
              <p>Avancé</p>
            </div>
          </div>

          <div
            className={`card ${activeCardIndex === 10 ? "active" : ""}`}
            onClick={() => toggleCardActive(10)}
          >
            <img src={vscode} alt="" />
            <div className="skill-info">
              <h2>VSCode</h2>
              <p>Avancé</p>
            </div>
          </div>
        </section>
      </div>
    </article>
  );
};

export default Competences;
