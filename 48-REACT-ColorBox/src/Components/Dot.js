import React from "react";
import "./Dot.css";

function Dot(props) {
  const { hue, saturation, luminosity, name } = props;
  const dotPosition = parseInt(hue) * 2;
  const huePosition = parseInt(hue) * 2 - 26;

  let textColor;
  if (luminosity <= 50) {
    textColor = "White";
  }
  return (
    <div className="DotWrap">
      <div
        className="Dot"
        style={{
          backgroundColor: `hsl(${hue}, ${saturation}%, ${luminosity}%)`,
          bottom: `${dotPosition}px`,
          color: textColor
        }}
      >
        {name}
      </div>
      <div
        className="Hue"
        style={{
          bottom: `${huePosition}px`
        }}
      >
        {hue}
      </div>
    </div>
  );
}

export default Dot;
