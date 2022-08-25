import React from "react";

function TextContainerComponent(props) {
  console.log(props);
  const { title, price, description, details } = props.infos;
  const { brand, model, sku, color, collection, stock } = details;
  return (
    <div>
      <div>{title}</div>
      <div className="prime">{"$" + price}</div>
      <div className="info">{description}</div>

      <div className="details">
        <div className="brandDetail">
          <p>Shoes Brand</p>
          <p>{brand}</p>
        </div>
        <div className="brandDetail">
          <p>Shoes Brand</p>
          <p>{model}</p>
        </div>
        <div className="brandDetail">
          <p>Shoes Brand</p>
          <p>{sku}</p>
        </div>
        <div className="brandDetail">
          <p>Shoes Brand</p>
          <p>{color}</p>
        </div>
        <div className="brandDetail">
          <p>Shoes Brand</p>
          <p>{collection}</p>
        </div>
        <div className="brandDetail">
          <p>Shoes Brand</p>
          <p>{stock}</p>
        </div>
      </div>
    </div>
  );
}

export default TextContainerComponent;
