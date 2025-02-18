import React from "react";
import useCounter from "../hooks/useCounter";

const CounterResultContainer = () => {
  const { counter } = useCounter();
  return (
    <div>
      <h3>Reiksme yra: {counter}</h3>
    </div>
  );
};

export default CounterResultContainer;
