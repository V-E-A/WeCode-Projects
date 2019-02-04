import React from "react";

function Slider(props) {
  const { sliderName, min, max, className, onChange, value } = props;
  return (
    <div className="Slider">
      <div className="sliderWrap">
        <div className="sliderName">{sliderName}</div>
        <input
          type="range"
          min={min}
          max={max}
          className={className}
          onChange={onChange}
        />
        <div>{value}</div>
      </div>
    </div>
  );
}

export default Slider;
