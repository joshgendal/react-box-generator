import React, { useState } from "react";

const ColorForm = (props) => {
  const [color, setColor] = useState("");
  const [height, setHeight] = useState("");
  const [width, setWidth] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBox = {
      color: color,
      height: height,
      width: width,
    };
    props.onNewBox(newBox);
    setColor("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="">Add Color</label>
      <input
        type="text"
        onChange={(e) => setColor(e.target.value)}
        value={color}
      />
      <label htmlFor="">Add Height</label>
      <input
        type="text"
        onChange={(e) => setHeight(e.target.value)}
        value={height}
      />
      <label htmlFor="">Add Width</label>
      <input
        type="text"
        onChange={(e) => setWidth(e.target.value)}
        value={width}
      />
      <button>Submit</button>
    </form>
  );
};

export default ColorForm;
