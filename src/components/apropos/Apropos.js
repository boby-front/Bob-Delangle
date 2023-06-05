import React, { useState } from "react";
import "./apropos.css";

const Apropos = () => {
  const [isPhotoVisible, setIsPhotoVisible] = useState(false);

  const handleButtonClick = () => {
    setIsPhotoVisible(!isPhotoVisible);
  };

  return (
    <article className="article-apropos">
      <h1>À propos</h1>
      <div className="line"></div>
      <section
        className={`section-apropos ${isPhotoVisible ? "full-width" : ""}`}
      >
        <aside
          className={`div-description-profil ${
            isPhotoVisible ? "narrow-width" : ""
          }`}
        >
          <h2 className="name-apropos">
            Bob Delangle{" "}
            <button className="button-photo" onClick={handleButtonClick}>
              Cliquez !
            </button>
          </h2>
          <br />
          <p>
            Bonjour et bienvenue sur mon portfolio ! Je suis un développeur
            front-end spécialisé en interfaces web esthétiques et intuitives,
            avec une expertise en développement React JS. Mon parcours atypique
            dans l'infographie a renforcé mes compétences en design et
            créativité. Passionné par le développement web, j'ai plongé dans
            l'apprentissage autodidacte, puis me suis perfectionné lors d'une
            formation intensive de 9 mois chez OpenClassrooms, en mettant
            l'accent sur le développement front-end, notamment en React JS.
            <br /> <br />
            J'ai acquis une solide compréhension des concepts fondamentaux de
            React JS, des bibliothèques telles que Redux, React Router et Axios,
            et des meilleures pratiques pour créer des applications web
            dynamiques et interactives. Aujourd'hui, en tant que développeur
            front-end freelance, je suis fier d'offrir des interfaces réactives,
            optimisées et évolutives. Explorez mon portfolio pour découvrir mes
            projets et n'hésitez pas à me contacter pour concrétiser votre
            vision.
          </p>
        </aside>
        <div
          className={`div-photo-profil ${isPhotoVisible ? "visible" : ""}`}
        ></div>
      </section>
    </article>
  );
};

export default Apropos;
