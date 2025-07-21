import React, { useContext, useState } from "react";
import Navbar from "~/components/Navbar";
import { CounterContext } from "~/service/Counter/CounterContext";

export default function Third() {
  const { counter } = useContext(CounterContext);

  return (
    <div>
      <Navbar />
      <main>
        <h1>Third Page</h1>

        <p>Counter: {counter}</p>
      </main>
    </div>
  );
}
