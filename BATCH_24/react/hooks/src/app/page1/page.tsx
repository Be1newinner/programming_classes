"use client";
import { CounterContext } from "@/service/CounterContext";
import React, { useContext } from "react";

export default function Page1() {
  const { counter } = useContext(CounterContext);

  return (
    <div className="h-screen bg-indigo-200">
      <h1>Page1</h1>
      <p>Counter : ({counter})</p>
    </div>
  );
}
