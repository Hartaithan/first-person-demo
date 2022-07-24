import React from "react";
import useStore from "../store";

const randomNum = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min)) + min;

const Target: React.FC = () => {
  const { increment } = useStore();
  const [position, setPosition] = React.useState([0, 0, 0]);

  const getNewPosition = () => {
    const x = randomNum(-3, 3);
    const y = randomNum(-3, 3);
    setPosition([x, y, 0]);
  };

  const handleHit = () => {
    increment();
    getNewPosition();
  };

  return (
    <mesh
      scale={0.3}
      position={position}
      rotation={[Math.PI / 2, 0, 0]}
      onClick={() => handleHit()}
    >
      <sphereGeometry args={[1, 32, 32]} />
      <meshMatcapMaterial color="red" />
    </mesh>
  );
};

export default Target;
