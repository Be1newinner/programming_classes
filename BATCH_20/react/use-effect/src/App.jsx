import { useState } from "react";
import "./App.css";
import Counter from "./Counter";

function App() {
  const [countA, setCountA] = useState(0);

  // Life Cycle of React App
  // stage 1. Mounting of component :
  //      => componentDidMount
  //      => The component becomes visible to our page
  // stage 2. Update of component:
  //      => componentDidUpdate
  //      => Compoenent ki values update hpti hai
  // stage 3. Unmounting of component:
  //      => componentDidUnmount
  //      => Componenet remove ho jata hai humare page se

  // Important Points :-
  //  1. Jab bhi kisi compoenent k andar koi bhi 'state' change hota hai to wo compoenent re render hota hai
  // 2. Jab bhi parent rerender hoga tb child bhi rerender hoga
  //  3. Jab bhi mere props of a compoennet rerender hote hai to mera componeent rerender hota hai

  function read() {
    console.log("I AM READING FROM App.jsx");
  }

  read();

  return (
    <>
      <h1>use Effect</h1>
      <Counter countA={countA} setCountA={setCountA} />
    </>
  );
}

export default App;
