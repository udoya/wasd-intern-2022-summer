import React, { useEffect, useState } from "react";

import { fetchImages } from "../api/api";
import { Gallery } from "../components";

export const Main: React.FC = () => {
  const [urls, setUrls] = useState<string[] | null>(null);

  useEffect(() => {
    const data = async () => {
      const urls = await fetchImages("shiba");
      console.log(urls);
      setUrls(urls);
    };
    data();
  }, []);

  const altText = "cute dogs";
  return (
    <main>
      <section className="section">
        <div className="container">
          <Gallery urls={urls} altText={altText} />
        </div>
      </section>
    </main>
  );
};
