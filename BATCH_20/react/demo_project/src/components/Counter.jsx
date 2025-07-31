import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  /*
  RULES_BATCH_20

  1. Jab bhi variable create krna hai, to hum const keyword use krenge e.g. const name = "Vijay";

  2. Jab bhi variable create krna hai and wo in future change ho sakte hai to hum let use krenge!
  e.g.  let   name = "Vijay";
              name = "Vijay Kumar"; 
  
  3. Jab bhi variable create krna hai and wo in future change ho sakti hai and uski changed value dom pe show krni hai to hum use krenge useState
  e.g. const [count, setCount] = useState(0)
  
  */

  function increase() {
    // count++;
    // count + 5;
    // const result = count + 1;

    if (count >= 10) return;

    setCount(count + 1);
    // console.log(count);
  }

  function decrease() {
    // count--;

    if (count > 0) {
      setCount(count - 1);
    }
    // console.log(count);
  }

  function reset() {
    // count = 0;
    setCount(0);
    // console.log(count);
  }

  return (
    <div>
      <h1>THE COUNTER</h1>

      <p className="counter">Counter: {count}</p>

      <div>
        <button onClick={increase}>increase</button>
        <button onClick={decrease}>decrease</button>
        <button onClick={reset}>reset</button>
      </div>
    </div>
  );
}

export default App;
