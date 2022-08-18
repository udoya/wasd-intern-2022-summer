import React from "react";

import { Image } from "./Image";

export const Gallery: React.FC = () => {
  const url = "https://images.dog.ceo/breeds/shiba/shiba-8.jpg";
  return (
    <div className="columns is-vcentered is-multiline">
      <div className="columns is-3">
        <Image url={url} />
      </div>
    </div>
  );
};
