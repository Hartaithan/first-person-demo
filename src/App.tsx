import React from "react";
import { Canvas } from "@react-three/fiber";
import { PointerLockControls } from "@react-three/drei";

const App = () => {
  return (
    <Canvas dpr={window.devicePixelRatio}>
      <ambientLight />
      <mesh scale={1} position={[0, 0, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial color="white" wireframe />
      </mesh>
      {/* @ts-expect-error */}
      <PointerLockControls />
    </Canvas>
  );
};

export default App;
