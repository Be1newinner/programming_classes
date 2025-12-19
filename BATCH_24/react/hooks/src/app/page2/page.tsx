"use client"
import { CounterContext } from "@/service/CounterContext";
import React, { useContext } from "react";

export default function Page2() {
  const { counter } = useContext(CounterContext);

  return (
    <div className="h-screen bg-green-200">
      <h1>Page2</h1>
      <p>Counter : ({counter})</p>
    </div>
  );
}
