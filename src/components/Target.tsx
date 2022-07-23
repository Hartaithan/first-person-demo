import React from "react";

const randomNum = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min)) + min;

const Target: React.FC = () => {
  const [position, setPosition] = React.useState([0, 0, 0]);

  const getNewPosition = () => {
    const x = randomNum(-3, 3);
    const y = randomNum(-3, 3);
    setPosition([x, y, 0]);
  };

  const handleHit = () => {
    getNewPosition();
  };

  return (
    <mesh
      scale={0.5}
      position={position}
      rotation={[Math.PI / 2, 0, 0]}
      onClick={() => handleHit()}
    >
      <cylinderGeometry args={[1, 1, 1, 16]} />
      <meshBasicMaterial color="white" wireframe />
    </mesh>
  );
};

export default Target;
