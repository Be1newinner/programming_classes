import { useState } from "react";

export default function UseState() {
  // let counter = 15;

  const [counter, setCounter] = useState(0);

  // Real Dom in Chrome
  // But, React uses Virtual Dom that is built using Javascript

  // We will declare variables using let or const if we do not want to show the updated value in real dom.

  //  else, useState => Hook

  function increaseCounter() {
    // counter++;
    // counter = counter + 1
    setCounter(counter + 1);
  }

  return (
    <div>
      <h1>Counter</h1>
      <p>Counter: {counter}</p>

      <button onClick={increaseCounter}>Increase Number</button>
      <button>Decrease Number</button>
      <button>Reset Number</button>
    </div>
  );
}
