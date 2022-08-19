import React from "react";

import { Image } from "./Image";

type UrlsProps = {
  urls: string[];
};

export const Gallery: React.FC<UrlsProps> = (props) => {
  const { urls } = props;
  const altText = "cute dog";

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
