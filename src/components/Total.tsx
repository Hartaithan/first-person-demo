import { Center, Float, Text3D } from "@react-three/drei";
import React from "react";
import useStore from "../store";
import font from "../fonts/helvetiker.json";

const Total: React.FC = () => {
  const count = useStore((state) => state.count);
  return (
    <Center>
      <Float floatIntensity={3} speed={1}>
        <Text3D font={font as any} size={0.5}>
          {count}
          <meshBasicMaterial color="white" wireframe />
        </Text3D>
      </Float>
    </Center>
  );
};

export default Total;
