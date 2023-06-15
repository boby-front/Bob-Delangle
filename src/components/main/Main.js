import React from "react";
import "./main.css";
import Acceuil from "../introduction/Acceuil";
import Competences from "../competences/Competences";
import Apropos from "../apropos/Apropos";
import Projects from "../projects/Projects";
import Contact from "../contact/Contact";

const Main = () => {
  return (
    <main>
      <Acceuil />
      <Competences />
      <Projects />
      <Apropos />
      <Contact />
    </main>
  );
};

export default Main;
