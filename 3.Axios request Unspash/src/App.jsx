import { useState } from "react";
import "./App.css";
import SearchPhotos from "./components/SearchPhotos";
import getRequestIMG from "./components/getRequestIMG";
import ImagesList from "./components/ImagesList";

function App() {
  const [images, setImages] = useState([]);
  const getRequestProps = async (event) => {
    const result = await getRequestIMG(event);
    setImages(result);
  };

  return (
    <div>
      <SearchPhotos search={getRequestProps} />

      <ImagesList images={images} />
    </div>
  );
}

export default App;
