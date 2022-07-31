import { Center, Text3D } from "@react-three/drei";
import React from "react";
import useStore from "../store";
import font from "../fonts/helvetiker.json";

const Total: React.FC = () => {
  const { shots, hits } = useStore((state) => state);
  const accuracy = (hits * 100) / shots;
  const textOptions = React.useMemo(() => {
    return {
      size: 0.3,
      bevelEnabled: true,
      bevelSize: 0.02,
    };
  }, []);

  return (
    <Center>
      <Text3D position={[0, 0.4, 0]} font={font as any} {...textOptions}>
        Shots: {shots}
        <meshNormalMaterial />
      </Text3D>
      <Text3D position={[0, 0, 0]} font={font as any} {...textOptions}>
        Hits: {hits}
        <meshNormalMaterial />
      </Text3D>
      <Text3D position={[0, -0.4, 0]} font={font as any} {...textOptions}>
        Accuracy: {accuracy ? `${parseFloat(accuracy.toFixed(1))}%` : "100%"}
        <meshNormalMaterial />
      </Text3D>
    </Center>
  );
};

export default Total;
