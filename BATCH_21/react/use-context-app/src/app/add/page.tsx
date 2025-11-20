"use client";
import { useCounterHook } from "@/service/CounterService/CounterContext";
import Link from "next/link";

export default function AddPage() {
  const { value, increaseBy1 } = useCounterHook();
  return (
    <div>
      <Link href="/">Go to Home Page</Link>
      <h1>Add Page</h1>
      <p>Value: {value}</p>
      <button onClick={increaseBy1}>Increase</button>
    </div>
  );
}
