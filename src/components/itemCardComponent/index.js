import React from "react";
import ImageComponent from "./ImgSide";
import TextContainerComponent from "./TextSide";


export default function CardComponent(props) {

  

  const { id, image, title } = props.items;
  console.log(props);
  return (
    <div className="card-container">
      {id % 2 === 1 ? (
        <div className="card">
          <ImageComponent image={image} title={title} />
          <TextContainerComponent infos={props.items} />
        </div>
      ) : (
        <div className="card">
          <TextContainerComponent infos={props.items} />
          <ImageComponent image={image} title={title} />
        </div>
      )}
    </div>
  );
}
