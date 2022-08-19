import React from "react";

import { Image } from "./Image";

type GalleryProps = {
  urls: string[];
  altText: string;
};

export const Gallery: React.FC<GalleryProps> = (props) => {
  const { urls, altText } = props;

  return (
    <div className="columns is-vcentered is-multiline">
      {urls.map((url) => {
        return (
          <div key={url} className="column is-3">
            <Image url={url} altText={altText} />
          </div>
        );
      })}
    </div>
  );
};
