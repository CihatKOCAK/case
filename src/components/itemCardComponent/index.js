import React from "react";
import ImageComponent from "./ImgSide";
import TextContainerComponent from "./TextSide";
import "./style.css";

export default function CardComponent(props) {
  const { id, image, title } = props.items;
  return (
    <div className="cardContainer">
      {id % 2 === 1 ? (
        <div className="card" style={{backgroundColor:"#F64E60"}}>
          <ImageComponent image={image} title={title} position={"left"} />
          <TextContainerComponent infos={props.items} position={"right"} />
        </div>
      ) : (
        <div className="card"  style={{backgroundColor:"#F6E54E"}}>
          <TextContainerComponent infos={props.items} position={"left"} />
          <ImageComponent image={image} title={title} position={"right"} />
        </div>
      )}
    </div>
  );
}
