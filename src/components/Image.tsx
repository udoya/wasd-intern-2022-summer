import React from "react";

type urlProps = {
  url: string;
};

export const Image: React.FC<urlProps> = (props) => {
  const { url } = props;
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
