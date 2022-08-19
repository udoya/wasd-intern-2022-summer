import React, { useEffect } from "react";

import { fetchImages } from "../api/api";
import { Gallery } from "../components";

export const Main: React.FC = () => {
  const urls = [
    "https://images.dog.ceo/breeds/shiba/shiba-11.jpg",
    "https://images.dog.ceo/breeds/shiba/shiba-12.jpg",
    "https://images.dog.ceo/breeds/shiba/shiba-14.jpg",
    "https://images.dog.ceo/breeds/shiba/shiba-17.jpg",
    "https://images.dog.ceo/breeds/shiba/shiba-2.jpg",
    "https://images.dog.ceo/breeds/shiba/shiba-3i.jpg",
    "https://images.dog.ceo/breeds/shiba/shiba-4.jpg",
    "https://images.dog.ceo/breeds/shiba/shiba-5.jpg",
    "https://images.dog.ceo/breeds/shiba/shiba-6.jpg",
    "https://images.dog.ceo/breeds/shiba/shiba-7.jpg",
    "https://images.dog.ceo/breeds/shiba/shiba-8.jpg",
    "https://images.dog.ceo/breeds/shiba/shiba-9.jpg",
  ];

  useEffect(() => {
    const data = async () => {
      const urls = await fetchImages("shiba");
      console.log(urls);
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
