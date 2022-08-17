import React from "react";
import { Image } from "./Image";

export const Gallery: React.FC = () => {
  return (
    <div className="columns is-vcentered is-multiline">
      <div className="columns is-3">
        <Image />
      </div>
    </div>
  );
};