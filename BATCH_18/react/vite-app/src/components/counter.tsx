import { useState } from "react";
import { House } from "lucide-react";

export default function Counter() {
  // let count = 5;

  const [count, setCount] = useState(5)

  function increase() {
    // alert(count)
    // setCount(8)
    setCount(count + 1)
  }

  console.log("Hello in Counter")

  return (
    <div className="animate">
      <House size={48} color="red" />
      <h1 className="bg-yellow-500 text-green-500 flex hover:bg-red-500 hover:text-blue-500">hello</h1>
      <p>{count}</p>
      <div>
        <button onClick={increase}>increase</button>
        <button>decrease</button>
        <button>reset</button>
      </div>
    </div>
  )
}