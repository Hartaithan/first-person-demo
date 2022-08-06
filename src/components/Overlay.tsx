import React from "react";
import useStore from "../store";

const Overlay: React.FC = () => {
  const { overlay, setOverlay } = useStore();
  if (!overlay) {
    return null;
  }
  return (
    <div id="overlay">
      <div id="background" />
      <button id="play" onClick={() => setOverlay(false)}>
        Play
      </button>
    </div>
  );
};

export default Overlay;
