import React, { useState } from "react";
import Navbar from "~/components/Navbar";

export default function Second() {
  const [counter, updateCounter] = useState(0);

  return (
    <div>
      <Navbar />
      <main>
        <h1>Second Page</h1>
        <p>Counter: {counter}</p>

        <button onClick={() => updateCounter((prev) => prev + 1)}>
          Increase
        </button>
        <button onClick={() => updateCounter((prev) => prev - 1)}>
          Decrease
        </button>
        <button onClick={() => updateCounter(0)}>Reset</button>
      </main>
    </div>
  );
}
