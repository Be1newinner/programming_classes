import { useReducer } from "react";

function reducerFunction(state, action) {
  // action = {type, payload}
  // console.log({ action });
  // console.log({ state });

  switch (action.type) {
    case "INCREASE_COUNTER": {
      return { ...state, count: state.count + 1 };
    }
    case "DECREASE_COUNTER": {
      return { ...state, count: state.count - 1 };
    }
    default:
  }

  return state;
}

export default function use_reducer_hook() {
  const [state, dispatch] = useReducer(reducerFunction, {
    email: "",
    fullName: "",
    password: "",
    gender: 0,
    count: 0,
  });

  return (
    <main>
      <div>use_reducer_hook</div>
      <p>Count: {state.count}</p>
      <p>email: {state.email}</p>
      <p>fullName: {state.fullName}</p>
      <p>password: {state.password}</p>
      <p>gender: {state.gender}</p>

      <button onClick={() => dispatch({ type: "INCREASE_COUNTER" })}>
        Increase
      </button>
      <button onClick={() => dispatch({ type: "DECREASE_COUNTER" })}>
        Decrease
      </button>
    </main>
  );
}
