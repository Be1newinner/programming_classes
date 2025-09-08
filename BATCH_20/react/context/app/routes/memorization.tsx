import { useCallback, useEffect, useMemo, useState } from "react";
import MenuBar from "~/components/MenuBar";

export default function Memorization() {
  // function ko memorize krna hai to en dono ko use krte hai!
  // useCallback
  // useMemo
  //
  // jab kisi componenent ko memorize krna hai to
  // memo use krte hai
  const [prime, setPrime] = useState(0);
  const [counter, setCount] = useState(0);

  // fucntion

  function nextPrime() {
    console.time("OPR");
    console.log();
    let i = 0;
    for (i = 0; i < 1000000000; i++) {}
    console.timeEnd("OPR");
    console.log(i);
    i = 0;
    return prime + 1;
  }

  //   const val = nextPrime();
  //   use memo memorize the value of an expensive function calculation
  //   const memorizedValue = useMemo(() => nextPrime(), [prime]);
  //
  // useCallback memorize the expensive function
  const memorizedValueFunction = useCallback(() => nextPrime(), [prime]);
  //   useEffect(() => {}, []);

  // React.memo

  return (
    <div>
      <h1>Memorization</h1>
      {/* <h1>memorizedValue: {val}</h1> */}
      {/* <h1>memorizedValue: {memorizedValue}</h1> */}
      <h1>prime: {prime}</h1>
      <h1>counter: {counter}</h1>
      <button
        onClick={() => {
          setPrime(prime + 1);
        }}
      >
        INC Prime
      </button>
      <br />
      <button
        onClick={() => {
          //   setCount(counter + 1);
          setCount(memorizedValueFunction());
        }}
      >
        INC counter
      </button>

      {Array.from({ length: 10000 }, (item, index) => index + 1).map((item) => (
        <MenuBar key={item} />
      ))}
    </div>
  );
}

// useState
// useEffect
// useContext
// useMemo
// useCallback
// memo
// useReducer
