import React from "react";

export default function ChildCounter2({ count, increase, decrease, reset }) {
  return (
    <div>
      <p>ChildCounter 2</p>
      <h2>{count}</h2>
      <button onClick={increase}>Increment</button>
      <button onClick={decrease}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
