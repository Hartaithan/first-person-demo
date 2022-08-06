import React from "react";
import useStore from "../store";

const Overlay: React.FC = () => {
  const { overlay, setOverlay } = useStore();

  const turnOffOverlay = () => {
    setTimeout(() => {
      setOverlay(false);
    }, 50);
  };

  if (!overlay) {
    return null;
  }

  return (
    <div id="overlay">
      <div id="background" />
      <button id="play" onClick={() => turnOffOverlay()}>
        Play
      </button>
    </div>
  );
};

export default Overlay;
