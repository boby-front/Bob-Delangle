import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/navbar/Header";
import Main from "./components/main/Main";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Main />
    </BrowserRouter>
  );
};

export default App;
