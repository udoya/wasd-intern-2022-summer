import React from "react";

type ImageInfoProps = {
  url: string;
  altText: string;
};

export const Image: React.FC<ImageInfoProps> = (props) => {
  const { url, altText } = props;

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
