import React from "react";
import Canvas from "./components/Canvas";
import Crosshair from "./components/Crosshair";

const App: React.FC = () => {
  return (
    <>
      <Crosshair />
      <Canvas />
    </>
  );
};

export default App;
