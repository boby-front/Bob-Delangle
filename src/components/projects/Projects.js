import React, { useState } from "react";
import { Data } from "../../data/Data";
import "./projects.css";

const Projects = () => {
  const [selectedData, setSelectedData] = useState(-1);
  console.log(selectedData);

  return (
    <article className="article-projects" id="projets">
      <h1>Mes projets</h1>
      <div className="line"></div>
      <p className="textCenter">
        Découvrez mes projets professionnels à travers les dernières techniques.
      </p>

      <section className="section-projects">
        <aside className="projects-container">
          {Data.map((obj, index) => (
            <div
              className="project-card"
              key={index}
              onClick={() => setSelectedData(index)}
            >
              <img src={Data[index].image} alt="" />
              <div className="visit-project">
                <h2>{Data[index].title}</h2>
                <div className="link-project">
                  {Data[index].link ? (
                    <a href={Data[index].link} target="_blank">
                      Visit Website
                    </a>
                  ) : null}
                  <a
                    className="button-github"
                    href={Data[index].github}
                    target="_blank"
                  >
                    GITHUB
                  </a>
                </div>
              </div>
            </div>
          ))}
        </aside>
        {selectedData !== -1 && ( // Vérifie si un projet est sélectionné avant de rendre l'aside
          <aside className="description-projects">
            <h2 className="title-project">{Data[selectedData].title}</h2>
            <div className="div-description">
              <div className="description">
                <h3 className="titles-description">Description</h3>
                <p>{Data[selectedData].description}</p>
              </div>
              <div className="point-fort">
                <h3 className="titles-description">Points forts</h3>
                <p>{Data[selectedData].pointFort}</p>
              </div>
            </div>
            <div className="logos-description">
              {Data[selectedData].logo.map((logo, logoIndex) => (
                <img key={logoIndex} src={logo} className="logo" alt="" />
              ))}
            </div>
          </aside>
        )}
      </section>
    </article>
  );
};

export default Projects;
