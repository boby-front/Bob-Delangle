import React, { useState } from "react";
import "./projects.css";
import html from "../../assets/logo_skill/html.png";
import css from "../../assets/logo_skill/css.png";
import js from "../../assets/logo_skill/js.png";
import sass from "../../assets/logo_skill/sass.png";
import node from "../../assets/logo_skill/node.png";
import react from "../../assets/logo_skill/react.png";
import image from "../../assets/images/fusée.jpg";
import fusée from "../../assets/images/image.jpg";
import vaisseau from "../../assets/images/vaisseau.jpg";
import space from "../../assets/images/space.jpg";
import fire from "../../assets/images/fire.jpg";

const Projects = () => {
  const [hoveredProjectId, setHoveredProjectId] = useState(null);
  const [projectDescriptions] = useState({
    1: {
      title: "Booki",
      description:
        "Création d'un site vitrine dynamique en HTML, CSS et Flexbox. Interface moderne et responsive, mettant en valeur les produits et services de l'entreprise. Expérience utilisateur agréable avec mise en page flexible et esthétique.",
      pointFort:
        " • Conception moderne et esthétique\n • Mise en page flexible avec Flexbox Interface responsive\n • Fonctionnalités interactives\n • HTML et CSS bien structurés"
          .split("\n")
          .map((pointFort, index) => (
            <React.Fragment key={index}>
              {pointFort}
              <br />
            </React.Fragment>
          )),

      logo: [html, css],
    },
    2: {
      title: "Ohmyfood",
      description:
        "Réalisation d'une présentation captivante de restaurants luxueux en utilisant HTML, Sass et des animations. Ce projet met en avant l'élégance et l'atmosphère raffinée des établissements, offrant ainsi une expérience visuelle immersive.",
      pointFort:
        " • Présentation visuellement attractive des restaurants luxueux\n • Utilisation de Sass pour une gestion efficace des styles et une meilleure maintenabilité\n • Intégration d'animations pour dynamiser l'interface\n • Conception responsive pour une expérience utilisateur fluide sur tous les appareils "
          .split("\n")
          .map((pointFort, index) => (
            <React.Fragment key={index}>
              {pointFort}
              <br />
            </React.Fragment>
          )),

      logo: [html, sass],
    },
    3: {
      title: "Sophie-Bluel",
      description:
        "Création d'un site d'architecte avec une gestion d'administrateur en JavaScript. Ce projet offre à l'architecte la possibilité d'ajouter et de supprimer ses travaux via une API, facilitée par l'utilisation de Swagger. De plus, le site est optimisé dynamiquement pour garantir une expérience utilisateur fluide.",
      pointFort:
        " • Site web professionnel pour un architecte avec une interface esthétique\n • Gestion d'administrateur permettant à l'architecte d'ajouter et de supprimer des travaux\n • Utilisation de JavaScript pour la logique côté client et les interactions dynamiques\n • Intégration d'une API et utilisation de Swagger pour faciliter la gestion des travaux\n • Optimisation dynamique pour une performance améliorée du site"
          .split("\n")
          .map((pointFort, index) => (
            <React.Fragment key={index}>
              {pointFort}
              <br />
            </React.Fragment>
          )),

      logo: [html, css, js, node],
    },
    4: {
      title: "Nina-Carducci",
      description:
        "Création d'un site de photographe en HTML, CSS et JavaScript, avec une attention particulière portée sur l'amélioration des performances, de l'accessibilité et du référencement. Ce projet offre une expérience utilisateur fluide, un accès facile pour tous et une visibilité optimale sur les moteurs de recherche.",
      pointFort:
        " • Amélioration des performances pour un chargement rapide des images et des pages\n • Mise en place de bonnes pratiques d'accessibilité pour une expérience inclusive\n • Optimisation du référencement pour une visibilité accrue dans les moteurs de recherche\n • Utilisation de HTML sémantique, CSS optimisé et JavaScript optimisé pour une meilleure performance"
          .split("\n")
          .map((pointFort, index) => (
            <React.Fragment key={index}>
              {pointFort}
              <br />
            </React.Fragment>
          )),

      logo: [html, css, js],
    },
    5: {
      title: "KASA",
      description:
        "Réalisation d'un site web complet pour une agence de location en utilisant React.js, Sass et des fonctionnalités avancées telles qu'un carrousel et l'affichage des profils des propriétaires. Ce projet offre une expérience utilisateur interactive et immersive en permettant aux utilisateurs de parcourir les offres de location, de visualiser des images attrayantes dans des carrousels et de découvrir les profils détaillés des propriétaires.",
      pointFort:
        " • Site web dynamique et réactif, construit avec React.js\n • Utilisation de Sass pour une gestion optimisée des styles\n • Présentation attrayante des propriétés à louer sur plusieurs pages\n • Carrousel interactif pour une visualisation aisée des images\n • Affichage des profils des propriétaires dynamiquement via un fichier de données"
          .split("\n")
          .map((pointFort, index) => (
            <React.Fragment key={index}>
              {pointFort}
              <br />
            </React.Fragment>
          )),

      logo: [html, css, react, js, node],
    },
  });

  return (
    <article className="article-projects">
      <h1>Mes projets</h1>
      <div className="line"></div>
      <p className="textCenter">
        Découvrez mes projets professionnels à travers les dernières techniques.
      </p>

      <section className="section-projects">
        <aside className="projects-container">
          <div
            className="project-card"
            onMouseEnter={() => setHoveredProjectId(1)}
            onMouseLeave={() => setHoveredProjectId(null)}
          >
            <img src={image} alt="" />
            <div className="visit-project">
              <h2>Booki</h2>
              <div className="link-project">
                <a
                  href="https://boby-front.github.io/agence-de-voyage-booki/"
                  target="_blank"
                >
                  Visit Website
                </a>
                <a
                  className="button-github"
                  href="https://github.com/boby-front/agence-de-voyage-booki.git"
                  target="_blank"
                >
                  GITHUB
                </a>
              </div>
            </div>
          </div>

          <div
            className="project-card"
            onMouseEnter={() => setHoveredProjectId(2)}
            onMouseLeave={() => setHoveredProjectId(null)}
          >
            <img src={fusée} alt="" />
            <div className="visit-project">
              <h2>Ohmyfood</h2>
              <div className="link-project">
                <a
                  href="https://boby-front.github.io/Ohmyfood/"
                  target="_blank"
                >
                  Visit Website
                </a>
                <a
                  className="button-github"
                  href="https://github.com/boby-front/Ohmyfood.git"
                  target="_blank"
                >
                  GITHUB
                </a>
              </div>
            </div>
          </div>

          <div
            className="project-card"
            onMouseEnter={() => setHoveredProjectId(3)}
            onMouseLeave={() => setHoveredProjectId(null)}
          >
            <img src={vaisseau} alt="" />
            <div className="visit-project">
              <h2>Sophie-Bluel</h2>
              <a
                className="button-github"
                href="https://github.com/boby-front/sophie-bluel.git"
                target="_blank"
              >
                GITHUB
              </a>
            </div>
          </div>

          <div
            className="project-card"
            onMouseEnter={() => setHoveredProjectId(4)}
            onMouseLeave={() => setHoveredProjectId(null)}
          >
            <img src={space} alt="" />
            <div className="visit-project">
              <h2>Nina-Carducci</h2>
              <div className="link-project">
                <a
                  href="https://boby-front.github.io/Nina-Carducci/"
                  target="_blank"
                >
                  Visit Website
                </a>
                <a
                  className="button-github"
                  href="https://github.com/boby-front/Nina-Carducci.git"
                  target="_blank"
                >
                  GITHUB
                </a>
              </div>
            </div>
          </div>

          <div
            className="project-card"
            onMouseEnter={() => setHoveredProjectId(5)}
            onMouseLeave={() => setHoveredProjectId(null)}
          >
            <img src={fire} alt="" />
            <div className="visit-project">
              <h2>KASA</h2>
              <div className="link-project">
                <a href="https://projet-kasa.netlify.app/" target="_blank">
                  Visit Website
                </a>
                <a
                  className="button-github"
                  href="https://github.com/boby-front/kassa.git"
                  target="_blank"
                >
                  GITHUB
                </a>
              </div>
            </div>
          </div>
        </aside>
        <aside
          className={`description-projects ${hoveredProjectId ? "show" : ""}`}
        >
          {hoveredProjectId && (
            <>
              <h2>{projectDescriptions[hoveredProjectId].title}</h2>
              <div className="div-description">
                <div className="description">
                  <h3 className="titles-description">Description</h3>
                  <p>{projectDescriptions[hoveredProjectId].description}</p>
                </div>
                <div className="point-fort">
                  <h3 className="titles-description">Points forts</h3>
                  <p>{projectDescriptions[hoveredProjectId].pointFort}</p>
                </div>
              </div>
              <div className="logos-description">
                {projectDescriptions[hoveredProjectId].logo.map(
                  (logo, index) => (
                    <img src={logo} alt={`Logo ${index + 1}`} key={index} />
                  )
                )}
              </div>
            </>
          )}
        </aside>
      </section>
    </article>
  );
};

export default Projects;
