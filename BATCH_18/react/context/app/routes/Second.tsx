import { useContext } from "react";
import Navbar from "~/components/Navbar";
import { CounterContext } from "~/service/Counter/CounterContext";

export default function Second() {
  const { counter, increase, decrease, reset } = useContext(CounterContext);

  return (
    <div>
      <Navbar />
      <main>
        <h1>Second Page</h1>
        <p>Counter: {counter}</p>

        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
        <button onClick={reset}>Reset</button>
      </main>
    </div>
  );
}
