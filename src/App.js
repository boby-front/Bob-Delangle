import React from "react";
import { BrowserRouter, Routes } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes></Routes>
    </BrowserRouter>
  );
};

export default App;
