import React from "react";
import { Canvas as FiberCanvas } from "@react-three/fiber";
import { PointerLockControls } from "@react-three/drei";
import Target from "./Target";
import Total from "./Total";
import useStore from "../store";

const Canvas: React.FC = () => {
  const { setOverlay } = useStore();
  return (
    <React.Suspense fallback={null}>
      <FiberCanvas dpr={window.devicePixelRatio}>
        <ambientLight />
        <Target />
        <Total />
        <PointerLockControls
          selector="#play"
          onUnlock={() => setOverlay(true)}
        />
      </FiberCanvas>
    </React.Suspense>
  );
};

export default Canvas;
