import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/navbar/Header";
import Acceuil from "./components/introduction/Acceuil";
import Competences from "./components/competences/Competences";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Acceuil />
      <Competences />
    </BrowserRouter>
  );
};

export default App;
