import React, { useState } from "react";
import "./apropos.css";

const Apropos = () => {
  const [isPhotoVisible, setIsPhotoVisible] = useState(false);

  // Fonction qui affiche ou non une photo (Au click)
  const handleButtonClick = () => {
    setIsPhotoVisible(!isPhotoVisible);
    const button = document.querySelector(".button-photo");
    button.classList.toggle("button-clicked");
  };

  return (
    <article className="article-apropos" id="apropos">
      <h1>À propos</h1>
      <div className="line"></div>
      <p>Au plaisir de faire votre connaissance ! Voici une partie de moi.</p>
      <section className="section-apropos">
        <aside className="div-description-profil">
          <h2 className="name-apropos">
            Bob Delangle{" "}
            <button className="button-photo" onClick={handleButtonClick}>
              Cliquez !
            </button>
          </h2>
          <br />
          <p className="text-apropos">
            Bonjour et bienvenue sur mon portfolio ! Je suis un développeur
            Fullstack spécialisé en interfaces web esthétiques et intuitives,
            avec une expertise en développement React et Node.Js Mon parcours
            atypique dans l'infographie a renforcé mes compétences en design et
            créativité. Passionné par le développement web, j'ai plongé dans
            l'apprentissage autodidacte, puis me suis perfectionné lors d'une
            formation intensive de 9 mois chez OpenClassrooms, en mettant
            l'accent sur le développement front-end, notamment en React JS.
            <br /> <br />
            J'ai acquis une solide compréhension des concepts fondamentaux de
            React JS, des bibliothèques telles que Redux, React Router et Axios,
            pour le Front-end, ainsi que Node.Js / Express pour le Back-end et
            des meilleures pratiques pour créer des applications web dynamiques
            et interactives. Aujourd'hui, en tant que développeur Fullstack
            freelance, je suis fier d'offrir des interfaces réactives,
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
