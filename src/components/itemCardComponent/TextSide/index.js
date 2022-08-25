import React from "react";
import "./style.css";
function TextContainerComponent(props) {
  const { title, price, description, details } = props.infos;

  var styleTop = 228;
  return (
    <div
      className="detailContainer"
      style={{ left: props.position === "left" ? 40 : 601 }}
    >
      <div className="detailTitle">{title}</div>
      <div className="price">{"$" + price}</div>
      <div className="info">{description}</div>

      <div className="details">
        {Object.keys(details).map((key, i) => {
          return (
            !(key === "model") && (
              <div key={i}>
                <div className="detailName" style={{ top: (styleTop += 29) }}>
                  {key}
                </div>
                <div className="detail" style={{ top: styleTop }}>
                  {details[key]}
                </div>
              </div>
            )
          );
        })}
      </div>
    </div>
  );
}

export default TextContainerComponent;
