import React from "react";

const Target: React.FC = () => {
  return (
    <mesh
      scale={0.5}
      position={[0, 0, 0]}
      rotation={[Math.PI / 2, 0, 0]}
      onClick={() => console.info("hit")}
    >
      <cylinderGeometry args={[1, 1, 1, 16]} />
      <meshBasicMaterial color="white" wireframe />
    </mesh>
  );
};

export default Target;
