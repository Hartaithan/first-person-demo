import React from "react";
import { Canvas as FiberCanvas } from "@react-three/fiber";
import { PointerLockControls } from "@react-three/drei";

const Canvas = () => {
  return (
    <FiberCanvas dpr={window.devicePixelRatio}>
      <ambientLight />
      <mesh scale={1} position={[0, 0, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial color="white" wireframe />
      </mesh>
      {/* @ts-expect-error */}
      <PointerLockControls />
    </FiberCanvas>
  );
};

export default Canvas;
