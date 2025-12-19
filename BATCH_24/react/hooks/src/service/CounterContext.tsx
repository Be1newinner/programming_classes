"use client"
import { createContext, ReactNode, useState } from "react";

export const CounterContext = createContext({
  counter: 0,
  setCounter: function (e) {},
  counterB: 0,
  setCounterB: function (e) {},
});

export const CounterContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [counter, setCounter] = useState(0);
  const [counterB, setCounterB] = useState(0);

  return (
    <CounterContext.Provider
      value={{
        counter,
        setCounter,
        counterB,
        setCounterB,
      }}
    >
      {children}
    </CounterContext.Provider>
  );
};
