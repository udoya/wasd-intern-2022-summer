import React from "react";

export const Footer: React.FC = () => {
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
