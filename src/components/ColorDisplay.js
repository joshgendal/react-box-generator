import React, { useState } from "react";
import "../App.css";

const ColorDisplay = (props) => {
  const { color, height, width } = props;

  const boxStyle = {
    backgroundColor: color,
    height: `${height}px`,
    width: `${width}px`,
  };
  console.log(boxStyle);

  return <div className="box" style={boxStyle}></div>;
};

export default ColorDisplay;
