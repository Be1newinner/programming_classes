import { useState } from "react";
import "./App.css";

function App() {
  // let counter = 5;

  const [counter, setCounter] = useState(0);

  return (
    <>
      <div className="container">
        {/* <label>
          <span>Name: </span>
          <input type="text" placeholder="Enter your name" />
        </label> */}

        <p>Counter : {counter}</p>
        <div>
          <button
            onClick={function () {
              setCounter(counter + 1);
            }}
          >
            Increase
          </button>
          <button
            onClick={function () {
              setCounter(counter - 1);
            }}
          >
            Decrease
          </button>
          <button
            onClick={function () {
              setCounter(0);
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
