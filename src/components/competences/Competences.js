import React, { useRef, useState } from "react";
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
import redux from "../../assets/logo_skill/redux.png";
import responsiv from "../../assets/logo_skill/responsiv.png";

const Competences = () => {
  const [activeCardIndex, setActiveCardIndex] = useState(null);
  const articleRef = useRef(null);

  const toggleCardActive = (index) => {
    if (index === activeCardIndex) {
      setActiveCardIndex(null);
    } else {
      setActiveCardIndex(index);
    }
  };

  return (
    <article ref={articleRef} className="article-competence" id="competences">
      <h1>Mes compétences & outils</h1>
      <div className="line"></div>
      <p className="textCenter">
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
              <p>Intermédiaire</p>
            </div>
          </div>
        </section>

        <section className="skill-cards">
          <div
            className={`card ${activeCardIndex === 6 ? "active" : ""}`}
            onClick={() => toggleCardActive(6)}
          >
            <img src={redux} alt="" />
            <div className="skill-info">
              <h2>Redux</h2>
              <p>Intermédiaire</p>
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

          <div
            className={`card ${activeCardIndex === 11 ? "active" : ""}`}
            onClick={() => toggleCardActive(11)}
          >
            <img src={responsiv} alt="" />
            <div className="skill-info">
              <h2>Responsiv</h2>
              <p>Avancé</p>
            </div>
          </div>
        </section>
      </div>
      <section className="flexCenter section-connaissances">
        <aside className="flexCenter">
          <p>
            <i className="fa-solid fa-check fa-lg"></i>Accessibilité
          </p>
          <p>
            <i className="fa-solid fa-check fa-lg"></i>Clean code
          </p>
          <p>
            <i className="fa-solid fa-check fa-lg"></i>W3C
          </p>
          <p>
            <i className="fa-solid fa-check fa-lg"></i>Bonne pratique SEO
          </p>
          <p>
            <i className="fa-solid fa-check fa-lg"></i>Tests unitaires
          </p>
          <p>
            <i className="fa-solid fa-check fa-lg"></i>Méthode Agile
          </p>
          <p>
            <i className="fa-solid fa-check fa-lg"></i>UI/UX
          </p>
          <p>
            <i className="fa-solid fa-check fa-lg"></i>Responsive design
          </p>
        </aside>
      </section>
    </article>
  );
};

export default Competences;
