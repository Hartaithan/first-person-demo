import React from "react";
import useStore from "../store";

const Total: React.FC = () => {
  const count = useStore((state) => state.count);
  return <p id="total">Total: {count}</p>;
};

export default Total;
