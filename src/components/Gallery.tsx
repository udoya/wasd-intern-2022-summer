import React from "react";

import { Image, Loading } from "./index";

type GalleryProps = {
  urls: string[] | null;
  altText?: string;
};

export const Gallery: React.FC<GalleryProps> = (props) => {
  const { urls, altText } = props;

  if (urls == null) {
    return <Loading />;
  }

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
