import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);

  useEffect(() => {
    console.log("Hi");
  }, []);

  useEffect(() => {
    console.log("Hello A");
  }, [countA]);

  useEffect(() => {
    // API CALL
    // SEARCH
    console.log("Hello B", countB);
  }, [countB]);

  console.log("RERENDERING");

  return (
    <>
      <h1>useEffect</h1>
      <div className="card">
        <button onClick={() => setCountA((count) => count + 1)}>
          countA is {countA}
        </button>
      </div>
      <div className="card">
        <button onClick={() => setCountB((count) => count + 1)}>
          countB is {countB}
        </button>
      </div>
    </>
  );
}

export default App;
