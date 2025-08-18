import { createContext, useState, type ReactNode } from "react";

export const CounterContext = createContext({
  counter: 0,
  increase: function () {},
  decrease: function () {},
  reset: function () {},
});

export const CounterContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [counter, updateCounter] = useState(0);

  function increase() {
    updateCounter((prev) => prev + 1);
  }
  function decrease() {
    updateCounter((prev) => prev - 1);
  }
  function reset() {
    updateCounter(0);
  }

  return (
    <CounterContext.Provider value={{ counter, increase, decrease, reset }}>
      {children}
    </CounterContext.Provider>
  );
};
