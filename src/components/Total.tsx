import { Center, Text3D } from "@react-three/drei";
import React from "react";
import useStore from "../store";
import font from "../fonts/helvetiker.json";

const Total: React.FC = () => {
  const count = useStore((state) => state.count);
  return (
    <Center>
      <Text3D font={font as any} size={0.5} bevelEnabled bevelSize={0.02}>
        {count}
        <meshNormalMaterial />
      </Text3D>
    </Center>
  );
};

export default Total;
