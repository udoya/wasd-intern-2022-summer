import axios from "axios";

export const fetchImages = async (breed: string) => {
  try {
    const response = await axios.get(`https://dog.ceo/api/breed/${breed}/images/random/12`);
    const data = await response.data;

    return data.message;
  } catch (error) {
    throw error;
  }
};
