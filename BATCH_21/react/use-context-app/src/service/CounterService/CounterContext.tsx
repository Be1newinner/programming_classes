import { createContext, ReactNode, useContext, useState } from "react";

// Step 1: Create Counter Context
const CounterContext = createContext({
  value: 0,
  user: {
    name: "",
    id: 0,
  },
  increaseBy1: () => {},
  register: () => {},
  login: () => {},
  logout: () => {},
});

// Step 2: Create Counter Provider
export const CounterContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState({
    name: "",
    id: 0,
  });

  function increaseBy1() {
    setCount(count + 1);
  }

  function login() {}

  function logout() {}

  function register() {}

  return (
    <CounterContext.Provider
      value={{
        value: count,
        user,
        increaseBy1: increaseBy1,
        register,
        login,
        logout,
      }}
    >
      {children}
    </CounterContext.Provider>
  );
};

// Step 3: Create Custom Counter Context hook
// how to create custom Hook
export const useCounterHook = () => {
  const counter = useContext(CounterContext);

  if (!counter) throw Error("Context is required!");

  return counter;
};
