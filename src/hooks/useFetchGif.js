import { useEffect, useState } from "react";
import getGif from "../helpers/getGif";

const useFetchGif = (category) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const useGetGif = async () => {
      const categoryGifs = await getGif(category);
      setIsLoading(false);
      setImages(categoryGifs);
    };
  
    useEffect(() => {
      useGetGif();
    }, []);

    return {
      images,
      isLoading
    }
}

export default useFetchGif