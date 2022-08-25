import React from "react";

export default function ImageComponent({ image, title }) {
  return (
    <div>
      <img src={image} alt={title} style={{width:'500px'}} />
    </div>
  );
}
