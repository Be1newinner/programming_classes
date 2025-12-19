"use client";
import { CounterContext } from "@/service/CounterContext";
import { useContext } from "react";

export default function CounterApp() {
  const { counter, setCounter } = useContext(CounterContext);
  return (
    <div>
      <h1>Counter App</h1>
      <p>Counter : {counter}
        
      </p>

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
