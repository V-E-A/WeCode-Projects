import React from "react";
import Dot from "./Dot.js";
import Bar from "./Bar.js";
import colorDistribution from "../Utils/ColorDistribution.js";
import "./Main.css";

class Main extends React.Component {
  render() {
    const {
      hueStart,
      hueEnd,
      saturationStart,
      saturationEnd,
      luminosityEnd,
      luminosityStart,
      steps
    } = this.props;
    const stepsArr = [];
    for (let i = 0; i < this.props.steps; i++) {
      stepsArr.push(i);
    }
    const dotList = stepsArr.map((item, i) => (
      <Dot
        key={i}
        name={i * 10}
        hue={colorDistribution(hueStart, hueEnd, steps, i)}
        saturation={colorDistribution(saturationStart, saturationEnd, steps, i)}
        luminosity={colorDistribution(luminosityStart, luminosityEnd, steps, i)}
      />
    ));
    const barList = stepsArr.map((item, i) => (
      <Bar
        key={i}
        name={i * 10}
        hue={colorDistribution(hueStart, hueEnd, steps, i)}
        saturation={colorDistribution(saturationStart, saturationEnd, steps, i)}
        luminosity={colorDistribution(luminosityStart, luminosityEnd, steps, i)}
      />
    ));
    return (
      <div className="mainWrap">
        <div className="DotsWrap">{dotList}</div>
        <div className="BarsWrap">{barList}</div>
      </div>
    );
  }
}

export default Main;
