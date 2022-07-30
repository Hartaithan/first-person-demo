import { Center, Text3D } from "@react-three/drei";
import React from "react";
import useStore from "../store";
import font from "../fonts/helvetiker.json";

const Total: React.FC = () => {
  const { shots, hits } = useStore((state) => state);
  return (
    <Center>
      <Text3D font={font as any} size={0.5} bevelEnabled bevelSize={0.02}>
        {shots} {hits}
        <meshNormalMaterial />
      </Text3D>
    </Center>
  );
};

export default Total;
