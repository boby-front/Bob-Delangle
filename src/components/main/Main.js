import React from "react";
import "./main.css";
import Acceuil from "../introduction/Acceuil";
import Competences from "../competences/Competences";
import Apropos from "../apropos/Apropos";

const main = () => {
  return (
    <main>
      <Acceuil />
      <Competences />
      <Apropos />
    </main>
  );
};

export default main;
