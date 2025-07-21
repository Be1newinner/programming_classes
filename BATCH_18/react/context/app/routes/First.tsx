import React, { useState } from "react";
import Navbar from "~/components/Navbar";

export default function First() {
  const [counter, updateCounter] = useState(0);
  return (
    <div>
      <Navbar />
      <main>
        <h1>Home Page</h1>

        <p>Counter: {counter}</p>
      </main>
    </div>
  );
}
