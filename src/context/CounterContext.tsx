import React, { createContext, useState } from "react";
import ChildrenProps from "../interface/ChildrenProps";

type CounterType = {
  counter: number;
  increment: () => void;
  decrement: () => void;
};

const CounterContext = createContext<CounterType>({
  counter: 0,
  increment: () => {},
  decrement: () => {},
});

const CounterProvider = ({ children }: ChildrenProps) => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };
  const decrement = () => {
    setCounter((prevCounter) => prevCounter - 1);
  };

  return (
    <CounterContext.Provider value={{ counter, increment, decrement }}>
      {children}
    </CounterContext.Provider>
  );
};

export { CounterContext, CounterProvider };
