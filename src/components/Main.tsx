import React from "react";
import Gallery from "./Gallery";

const Main: React.FC = () => {
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

export default Main;
