import React from "react";
import Canvas from "./components/Canvas";
import Crosshair from "./components/Crosshair";
import Overlay from "./components/Overlay";
import useStore from "./store";

const App: React.FC = () => {
  const { shot, overlay } = useStore();

  const handleClick = React.useCallback(() => {
    if (overlay) return;
    shot();
  }, [overlay]); // eslint-disable-line

  React.useEffect(() => {
    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, [handleClick]);

  return (
    <>
      <Overlay />
      <Crosshair />
      <Canvas />
    </>
  );
};

export default App;
