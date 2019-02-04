import React from "react";
import Slider from "./Slider.js";
import "./SideBar.css";

class SideBar extends React.Component {
  render() {
    const {
      onChange,
      steps,
      hueEnd,
      hueStart,
      luminosityEnd,
      luminosityStart,
      saturationEnd,
      saturationStart
    } = this.props;
    return (
      <div className="SideBar">
        <h4 className="stepsTitle">Steps</h4>
        <Slider
          sliderName={"Steps"}
          min={3}
          max={21}
          className={"steps"}
          onChange={onChange}
          value={steps}
        />

        <h4>Hue</h4>
        <Slider
          sliderName={"Start"}
          min={0}
          max={359}
          className={"hueStart"}
          onChange={onChange}
          value={hueStart}
        />

        <Slider
          sliderName={"End"}
          min={0}
          max={359}
          className={"hueEnd"}
          onChange={onChange}
          value={hueEnd}
        />

        <h4>Saturation</h4>

        <Slider
          sliderName={"Start"}
          min={0}
          max={100}
          className={"saturationStart"}
          onChange={onChange}
          value={saturationStart}
        />

        <Slider
          sliderName={"End"}
          min={0}
          max={100}
          className={"saturationEnd"}
          onChange={onChange}
          value={saturationEnd}
        />
        <h4>Luminosity</h4>

        <Slider
          sliderName={"Start"}
          min={0}
          max={100}
          className={"luminosityStart"}
          onChange={onChange}
          value={luminosityStart}
        />

        <Slider
          sliderName={"End"}
          min={0}
          max={100}
          className={"luminosityEnd"}
          onChange={onChange}
          value={luminosityEnd}
        />
      </div>
    );
  }
}

export default SideBar;
