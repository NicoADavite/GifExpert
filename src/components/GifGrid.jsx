import useFetchGif from "../hooks/useFetchGif";
import { GifItem } from "./index.js";

export const GifGrid = ({ category }) => {

  const { images, isLoading } = useFetchGif(category); 

  return (
    <>
      <h3>{category}</h3>
      <div className="card-grid">
        {
          isLoading && <h2>Cargando...</h2>
        }
        { !isLoading && images.map( image => {
          return (
            <GifItem key={image.id} {...image}/>
          );
        })}
      </div>
    </>
  );
};

