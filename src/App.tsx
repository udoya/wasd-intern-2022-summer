import React from "react";
import "bulma/css/bulma.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
