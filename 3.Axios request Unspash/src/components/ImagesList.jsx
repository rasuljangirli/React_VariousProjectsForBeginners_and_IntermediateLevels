import React from "react";
import Image from "./Image";

function ImagesList({ images }) {
  return (
    <div className="imagesList">
      {images &&
        images.map((image, index) => <Image key={index} image={image} />)}
    </div>
  );
}

export default ImagesList;
