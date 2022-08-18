import React from "react";

export const Image: React.FC = () => {
  const url: string = "https://images.dog.ceo/breeds/shiba/shiba-8.jpg";
  const altText: string = "cute dog";

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
