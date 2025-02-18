import React from "react";
import ButtonComponent from "./ButtonComponent";
import useCounter from "../hooks/useCounter";

const ButtonContainer = () => {
  const { increment, decrement } = useCounter();
  return (
    <div>
      <ButtonComponent title="Padidinti" action={increment} />
      <ButtonComponent title="Pamazinti" action={decrement} />
    </div>
  );
};

export default ButtonContainer;
