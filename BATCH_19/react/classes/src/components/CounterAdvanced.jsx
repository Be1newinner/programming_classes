import React from "react";
import ChildCounter1 from "./ChildCounter1";
import ChildCounter2 from "./ChildCounter2";

export default function CounterAdvanced() {
  const [count1, setCount1] = React.useState(0);
  const [count2, setCount2] = React.useState(0);

  const increment2 = () => {
    setCount2((prevCount) => prevCount + 1);
  };
  const decrement2 = () => {
    setCount2((prevCount) => prevCount - 1);
  };
  const reset2 = () => {
    setCount2(0);
  };
  const increment1 = () => {
    setCount1((prevCount) => prevCount + 1);
  };
  const decrement1 = () => {
    setCount1((prevCount) => prevCount - 1);
  };
  const reset1 = () => {
    setCount1(0);
  };

  return (
    <div>
      <ChildCounter1
        count={count1}
        increase={increment2}
        decrease={decrement2}
        reset={reset2}
      />
      <ChildCounter2
        count={count2}
        increase={increment1}
        decrease={decrement1}
        reset={reset1}
      />
    </div>
  );
}
