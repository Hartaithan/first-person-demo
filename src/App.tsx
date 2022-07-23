import React from "react";
import Canvas from "./components/Canvas";
import Crosshair from "./components/Crosshair";
import Total from "./components/Total";

const App = () => {
  return (
    <>
      <Crosshair />
      <Total />
      <Canvas />
    </>
  );
};

export default App;
