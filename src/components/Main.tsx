import React, { useEffect, useState } from "react";

import { fetchImages } from "../api/api";
import { Gallery, Form } from "../components";

export const Main: React.FC = () => {
  const [urls, setUrls] = useState<string[] | null>(null);
  const [breed, setBreed] = useState("shiba");

  useEffect(() => {
    const data = async () => {
      const urls = await fetchImages(breed);
      setUrls(urls);
    };
    data();
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();
      const urls = await fetchImages(breed);
      setUrls(urls);
    } catch (error) {
      throw error;
    }
  };

  const handleSelectBreed = (breed: string) => {
    setBreed(breed);
  };

  const altText = "cute dogs";
  return (
    <main>
      <section className="section">
        <div className="container">
          <Form handleSelectBreed={handleSelectBreed} handleSubmit={handleSubmit} defaultValue={breed} />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <Gallery urls={urls} altText={altText} />
        </div>
      </section>
    </main>
  );
};
