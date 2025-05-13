import React from "react";

export default function ChildCounter1() {
  const [count1, setCount1] = React.useState(0);

  const increment = () => {
    setCount1((prevCount) => prevCount + 1);
  };
  const decrement = () => {
    setCount1((prevCount) => prevCount - 1);
  };
  const reset = () => {
    setCount1(0);
  };
  return (
    <div>
      <p>ChildCounter 1</p>
      <h2>{count1}</h2>

      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
