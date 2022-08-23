import axios from "axios";

//引数にbreedを指定しない: breedsの配列を取得
//引数にbreedを指定する:  そのbreedの画像URLをもった配列を取得
export const fetchImages = async (breed?: string) => {
  try {
    if (!breed) {
      const response = await axios.get(`https://dog.ceo/api/breeds/list/all`);
      const data = await response.data;
      const breeds = Object.keys(data.message);

      return breeds;
    } else {
      const response = await axios.get(`https://dog.ceo/api/breed/${breed}/images/random/12`);
      const data = await response.data;

      return data.message;
    }
  } catch (error) {
    throw error;
  }
};
