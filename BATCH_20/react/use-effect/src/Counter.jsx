import { useEffect, useState } from "react";

export default function Counter({ countA, setCountA }) {
  const [count, setCount] = useState(0);
  const [countB, setCountB] = useState(0);

  function read(id) {
    console.log("I AM READING FROM COUNTER", id);
  }

  //    jo bhi function aap useEffect ke nadar  call kroge wo sirf componentDidMount pe call hoga. mtlb sirf first time jab bhi mera wo componeent first time load hoga naki rerender pe...

  useEffect(() => {
    read(countA);
  }, []);

  useEffect(() => {
    console.log("countB", countB);
  }, [countB]);

  function apiCall(id) {
    console.log("RERENDERING PAGE", id);
  }

  apiCall(countA);

  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>increase</button>

      <p>{countA}</p>
      <button onClick={() => setCountA(countA + 1)}>increase A</button>

      <p>{countB}</p>
      <button onClick={() => setCountB(countB + 1)}>increase B</button>
    </>
  );
}
