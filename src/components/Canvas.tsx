import React from "react";
import { Canvas as FiberCanvas } from "@react-three/fiber";
import { PointerLockControls } from "@react-three/drei";
import Target from "./Target";
import Total from "./Total";

const Canvas: React.FC = () => {
  return (
    <React.Suspense fallback={null}>
      <FiberCanvas dpr={window.devicePixelRatio}>
        <ambientLight />
        <Target />
        <Total />
        <PointerLockControls />
      </FiberCanvas>
    </React.Suspense>
  );
};

export default Canvas;
