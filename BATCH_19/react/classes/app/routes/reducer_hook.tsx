import { useReducer, useState } from "react";

function reducer(state: any, action: { type: string }) {
  switch (action.type) {
    case "increaseA": {
      return { ...state, count1: state.count1 + 1 };
    }

    case "increaseB": {
      return { ...state, count2: state.count2 + 1 };
    }

    default:
      return state;
  }
}

export default function ReducerHook() {
  // const [counters, setCounters] = useState({
  //   count1: 0,
  //   count2: 0,
  // });

  const [state, dispatch] = useReducer(reducer, {
    count1: 0,
    count2: 0,
  });

  // function increaseStateCounter1() {
  //   setCounters((prev) => ({ ...prev, count1: prev.count1 + 1 }));
  // }

  // function increaseStateCounter2() {
  //   setCounters((prev) => ({ ...prev, count2: prev.count2 + 1 }));
  // }

  return (
    <div>
      <h1>Reference Hook</h1>
      <p>count1 : {state.count1}</p>
      <p>count2 : {state.count2}</p>

      <button onClick={() => dispatch({ type: "increaseA" })}>
        increase Counter 1
      </button>
      <button onClick={() => dispatch({ type: "increaseB" })}>
        increase Counter 2
      </button>
    </div>
  );
}
