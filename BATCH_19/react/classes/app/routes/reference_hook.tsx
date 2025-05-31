import { useEffect, useRef, useState, type Ref } from "react";

export default function ReferenceHook() {
  const inputRef = useRef<HTMLInputElement>(null);

  //   const [input, setInput] = useState("");

  //   useEffect(() => {
  //     console.log(input);
  //   }, [input]);

  console.log("I rerendered");

  return (
    <div>
      <h1>Reference Hook</h1>
      <input ref={inputRef} type="text" placeholder="your name here!" />
      {/* <input
        type="text"
        placeholder="email!"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      /> */}
      <button
        onClick={() => {
          console.log(inputRef.current?.blur());
        }}
      >
        Blur
      </button>
      <button
        onClick={() => {
          console.log(inputRef.current?.focus());
        }}
      >
        focus
      </button>

      <button
        onClick={() => {
          console.log(inputRef.current?.value);
        }}
      >
        fetch value
      </button>

      {/* <button
        onClick={() => {
          console.log(input);
        }}
      >
        fetch value 2
      </button> */}
    </div>
  );
}
