import React from "react";
import "bulma/css/bulma.css";

const Header = () => {
  return (
    <header className="hero is-dark is-bold">
      <div className="hero-body">
        <div className="container"></div>
        <h1 className="title">Cute Dog Images</h1>
      </div>
    </header>
  );
};

const Image = () => {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image">
          <img src="https://images.dog.ceo/breeds/shiba/shiba-8.jpg" alt="cute dog" />
        </figure>
      </div>
    </div>
  );
};

const Gallery = () => {
  return (
    <div className="columns is-vcentered is-multiline">
      <div className="columns is-3">
        <Image />
      </div>
    </div>
  );
};

const Main = () => {
  return (
    <main>
      <section className="section">
        <div className="container">
          <Gallery />
        </div>
      </section>
    </main>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p> Dog images are retrieved </p>
        <p>
          <a href="https://dog.ceo/dog-api/about"> Donate to Dog API </a>
        </p>
      </div>
    </footer>
  );
};

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
