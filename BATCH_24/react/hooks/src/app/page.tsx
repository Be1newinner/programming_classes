"use client";
import { useState } from "react";

export default function CounterApp() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1>Counter App</h1>

      <p>Counter : {counter}</p>

      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Increase
      </button>
      <br />
      <button
        onClick={() => {
          setCounter(counter - 1);
        }}
      >
        Decrease
      </button>
    </div>
  );
}

/*
 Simple Blank Page
export default function CounterApp() {
  return (
    <div>
      <h1>Counter App</h1>
    </div>
  );
}
*/
