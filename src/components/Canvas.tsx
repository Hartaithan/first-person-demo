import React from "react";
import { Canvas as FiberCanvas } from "@react-three/fiber";
import { PointerLockControls } from "@react-three/drei";
import Target from "./Target";

const Canvas: React.FC = () => {
  return (
    <FiberCanvas dpr={window.devicePixelRatio}>
      <ambientLight />
      <Target />
      {/* @ts-ignore:next-line */}
      <PointerLockControls />
    </FiberCanvas>
  );
};

export default Canvas;
