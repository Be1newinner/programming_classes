import { useEffect, useState } from "react";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  const [counterA, setCounterA] = useState(0);
  const [counterB, setCounterB] = useState(0);

  function printCounterA() {
    // setCounter(counter + 1);
    console.log({ counterA });
  }

  function printCounterB() {
    // setCounter(counter + 1);
    console.log({ counterB });
  }

  // printCounter();

  useEffect(() => {
    printCounterA();
  }, []);

  useEffect(() => {
    printCounterB();
  }, [counterB]);

  return (
    <div>
      <p>CounterA: {counterA}</p>
      <p>CounterB: {counterB}</p>
      <button onClick={() => setCounterA(counterA + 1)}>Increase A</button>
      <br />
      <button onClick={() => setCounterB(counterB + 1)}>Increase B</button>
    </div>
  );
}
