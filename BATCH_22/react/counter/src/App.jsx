import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(5);

  return (
    <>
      <div className="container">
        <p>counter : {counter}</p>
        <div>
          <button
            onClick={function () {
              setCounter(counter + 1);
            }}
          > 
            increase
          </button>
          <button
            onClick={function () {
              setCounter(counter - 1);
            }}
          >
            decrease
          </button>
          <button
            onClick={function () {
              setCounter(0);
            }}
          >
            reset
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
