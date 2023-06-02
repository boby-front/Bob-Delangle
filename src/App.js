import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/navbar/Header";
import Introduction from "./components/introduction/Introduction";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Introduction />
    </BrowserRouter>
  );
};

export default App;
