import React, { useEffect, useRef } from "react";
import "./acceuil.css";
import cosmonaute from "../../assets/images/cosmonaute.png";

const Introduction = () => {
  const targetTitleRef = useRef(null);
  const array = ["Développeur", "Intégrateur-web", "Créatif", "Passionné"];
  let wordIndex = 0;
  let letterIndex = 0;
  let intervalId;

  useEffect(() => {
    const createLetter = () => {
      const letter = document.createElement("span");
      targetTitleRef.current.appendChild(letter);
      letter.textContent = array[wordIndex][letterIndex];
    };

    const updateText = () => {
      if (letterIndex < array[wordIndex].length) {
        createLetter();
        letterIndex++;
      } else {
        clearInterval(intervalId);
        setTimeout(() => {
          eraseText();
        }, 1000);
      }
    };

    const eraseText = () => {
      const text = targetTitleRef.current;
      if (text.childNodes.length === 0) {
        wordIndex = (wordIndex + 1) % array.length;
        letterIndex = 0;
        intervalId = setInterval(updateText, 200);
      } else {
        text.removeChild(text.lastChild);
        setTimeout(() => {
          eraseText();
        }, 50);
      }
    };

    intervalId = setInterval(updateText, 100);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <article>
      <div className=" div-titles">
        <h1 className="target-title ">Je suis </h1>
        <h1 ref={targetTitleRef} className="target-title-second"></h1>
        <p>
          Je suis un passionné de développement et de graphisme, spécialisé en
          React JS. Mon objectif est de créer des interfaces web interactives et
          esthétiques en utilisant les dernières technologies. Je suis
          constamment à l'affût des tendances et des meilleures pratiques pour
          offrir une expérience utilisateur exceptionnelle.
        </p>
        <h2 className="more-info">EN SAVOIR PLUS</h2>
      </div>
      <img src={cosmonaute} alt="" className="cosmonaute" />
    </article>
  );
};

export default Introduction;
