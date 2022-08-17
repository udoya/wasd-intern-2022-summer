import React from "react";
import "bulma/css/bulma.css";
import { Header, Main, Footer } from "./components/";

export const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};
