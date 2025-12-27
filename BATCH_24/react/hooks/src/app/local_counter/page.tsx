"use client";
import React, { useEffect, useState } from "react";

export default function LocalPage() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const value = localStorage.getItem("counterA");
    setCounter(Number(value));
  }, []);

  return (
    <div>
      <h1>Local Page</h1>
      <p>counter : {counter}</p>

      <button
        onClick={() => {
          const newValue = counter + 1;
          localStorage.setItem("counterA", String(newValue));
          setCounter(newValue);
        }}
      >
        Increase
      </button>
      <br />
      <button
        onClick={() => {
          const newValue = counter - 1;
          localStorage.setItem("counterA", String(newValue));
          setCounter(newValue);
        }}
      >
        Decrease
      </button>
    </div>
  );
}
