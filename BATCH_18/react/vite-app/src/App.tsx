import { useState } from "react";

export default function App() {
  // let count = 5;

  const [count, setCount] = useState(5)

  function increase() {
    // alert(count)
    // setCount(8)
    setCount(count + 1)
  }

  return (
    <div>
      <h1>hello</h1>
      <p>{count}</p>
      <div>
        <button onClick={increase}>increase</button>
        <button>decrease</button>
        <button>reset</button>
      </div>
    </div>
  )
}