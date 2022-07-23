import React from "react";
import { Canvas as FiberCanvas } from "@react-three/fiber";
import { PointerLockControls } from "@react-three/drei";
import Target from "./Target";

const Canvas: React.FC = () => {
  return (
    <FiberCanvas dpr={window.devicePixelRatio}>
      <ambientLight />
      <Target />
      {/* @ts-expect-error */}
      <PointerLockControls />
    </FiberCanvas>
  );
};

export default Canvas;
