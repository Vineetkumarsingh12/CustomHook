import { useEffect, useState } from 'react';
import axios from 'axios';

const API_KEY = process.env.REACT_APP_Giphy_Key;

const useGIf = (gifTag) => {
  const randomGif = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
  const tagUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${gifTag}`;
  const [gif, setGif] = useState("");
  const [loading, setLoading] = useState(false);

  async function fetchData(gifTag) {
    setLoading(true);

    try {
      const { data } = await axios.get( gifTag ? tagUrl  : randomGif );
      const imageSrc = data.data.images.downsized_large.url;
      setLoading(false);
      setGif(imageSrc);
    } 
    catch (error) {
      alert("API limit exceeded");
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return { gif, loading, fetchData };
};

export default useGIf;
