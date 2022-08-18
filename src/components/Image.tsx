import React from "react";

export const Image: React.FC = () => {
  const url = "https://images.dog.ceo/breeds/shiba/shiba-8.jpg";
  const altText = "cute dog";

  return (
    <div className="card">
      <div className="card-image">
        <figure className="image">
          <img src={url} alt={altText} />
        </figure>
      </div>
    </div>
  );
};