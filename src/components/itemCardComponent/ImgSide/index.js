import React from "react";
import "./style.css";

export default function ImageComponent({ image, title, position }) {
  console.log( position === "left" ? 16 : 360);
  return (
    <div className="imgStyle" style={{ left: position === "left" ? 16 : 360 }}>
      <img src={image} alt={title} />
    </div>
  );
}
