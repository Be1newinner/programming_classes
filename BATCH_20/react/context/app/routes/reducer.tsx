import { useReducer } from "react";

interface stateProps {
  value: number;
  email: string;
  password: string;
  fullname: string;
}

interface dispatchProps {
  type: string;
  payload?: number;
}

function reducerFunction(state: stateProps, action: dispatchProps) {
  switch (action.type) {
    case "INCREASE": {
      return { ...state, value: state.value + (action.payload || 1) };
    }

    case "DECREASE": {
      return { ...state, value: state.value - 1 };
    }

    case "UPDATE_NAME": {
      return state;
    }

    default: {
      return state;
    }
  }
}

export default function ReducerComponent() {
  const [state, dispatch] = useReducer(reducerFunction, {
    value: 0,
    email: "",
    password: "",
    fullname: "",
  });

  return (
    <div>
      <h1>Reducer Component</h1>
      <p>Value: {state.value}</p>
      <button onClick={() => dispatch({ type: "INCREASE", payload: 5 })}>
        Increase
      </button>
      <button onClick={() => dispatch({ type: "DECREASE" })}>Decrease</button>
    </div>
  );
}
