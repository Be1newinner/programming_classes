import { createContext, useContext, useState, type ReactNode } from "react";

// This is the structure of 'value key' of provider
const defaultValues = {
  c1: 0,
  c2: 0,
  c3: 0,
  increase: (_counterType: string) => {},
  decrease: (_counterType: string) => {},
  reset: (_counterType: string) => {},
};

// Step 1.
const CounterContext = createContext(defaultValues);

// Step 2.
export const CounterContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [c1, setC1] = useState(defaultValues.c1);
  const [c2, setC2] = useState(defaultValues.c2);
  const [c3, setC3] = useState(defaultValues.c3);

  function increase(counterType: string) {
    switch (counterType) {
      case "c1": {
        setC1(c1 + 1);
        break;
      }
      case "c2": {
        setC2(c2 + 1);
        break;
      }
      case "c3": {
        setC3(c3 + 1);
        break;
      }
      default: {
        throw Error("Invalid Counter!");
      }
    }
  }
  function decrease(counterType: string) {
    switch (counterType) {
      case "c1": {
        setC1(c1 - 1);
        break;
      }
      case "c2": {
        setC2(c2 - 1);
        break;
      }
      case "c3": {
        setC3(c3 - 1);
        break;
      }
      default: {
        throw Error("Invalid Counter!");
      }
    }
  }

  function reset(counterType: string) {
    switch (counterType) {
      case "c1": {
        setC1(0);
        break;
      }
      case "c2": {
        setC2(0);
        break;
      }
      case "c3": {
        setC3(0);
        break;
      }
      default: {
        throw Error("Invalid Counter!");
      }
    }
  }

  return (
    // Step 3
    <CounterContext.Provider
      value={{
        c1,
        c2,
        c3,
        increase,
        decrease,
        reset,
      }}
    >
      {children}
    </CounterContext.Provider>
  );
};

// Step 4. Initialize the context consumer
export function useCounter() {
  const ctx = useContext(CounterContext);
  if (!ctx) throw new Error("useCounter must be passed in provider");
  return ctx;
}
