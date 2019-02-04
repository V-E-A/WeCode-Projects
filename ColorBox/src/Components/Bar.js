import React from "react";
import "./Bar.css";
import hslToHex from "../Utils/ColorConversion.js";

function Bar(props) {
  const { hue, saturation, luminosity, name } = props;
  const backgroundColor = `hsl(${hue}, ${saturation}%, ${luminosity}%)`;
  const backgroundHex = hslToHex(hue, saturation, luminosity);
  let textColor;
  if (luminosity <= 50) {
    textColor = "White";
  }
  return (
    <div className="BarWrap">
      <div
        className="Bar"
        style={{
          backgroundColor: backgroundColor,
          top: `${parseInt(hue)}px`,
          color: textColor
        }}
      >
        {name}
        <span className="hex">{backgroundHex}</span>
      </div>
    </div>
  );
}

export default Bar;
