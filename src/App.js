import logo from "./logo.svg";
import "./App.css";
import ColorForm from "./components/ColorForm";
import ColorDisplay from "./components/ColorDisplay";
import React, { useState } from "react";

function App() {
  const [boxArr, addToBoxArr] = useState([]);
  console.log(boxArr);
  const addBox = (newBox) => {
    addToBoxArr((prevState) => [...prevState, newBox]);
  };
  return (
    <div className="App">
      <ColorForm onNewBox={addBox} />
      {boxArr.map(({ color, height, width }, index) => (
        <ColorDisplay key={index} color={color} height={height} width={width} />
      ))}
    </div>
  );
}

export default App;

console.log("hi");
