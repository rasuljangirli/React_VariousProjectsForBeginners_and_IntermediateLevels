import React from "react";

function Image({ image }) {
  return (
    <div>
      <img style={{ width: "100%" }} src={image.urls.regular} alt="" />
    </div>
  );
}

export default Image;
