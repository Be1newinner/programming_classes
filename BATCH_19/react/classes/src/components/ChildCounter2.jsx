import React from "react";

export default function ChildCounter1() {
  const [count2, setCount2] = React.useState(0);

  const increment = () => {
    setCount2((prevCount) => prevCount + 1);
  };
  const decrement = () => {
    setCount2((prevCount) => prevCount - 1);
  };
  const reset = () => {
    setCount2(0);
  };
  return (
    <div>
      <p>ChildCounter 2</p>
      <h2>{count2}</h2>

      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
