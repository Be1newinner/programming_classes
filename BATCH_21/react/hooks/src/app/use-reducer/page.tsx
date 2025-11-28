"use client";
import React, { useReducer } from "react";

// ENUM
const REDUCER_FUNCTION = {
  INCREASE: "INCREASE",
  DECREASE: "DECREASE",
  RESET: "RESET",
};

function reducer(state, action) {
  const { type, payload } = action;
  console.log({ type, payload });

  switch (type) {
    case REDUCER_FUNCTION.INCREASE: {
      return { ...state, [payload]: state[payload] + 1 };
    }
    case REDUCER_FUNCTION.DECREASE: {
      return { ...state, [payload]: state[payload] - 1 };
    }
    case REDUCER_FUNCTION.RESET: {
      return { ...state, [payload]: 0 };
    }

    default:
      return state;
  }
}

export default function UseReducerHook() {
  const [state, dispatch] = useReducer(reducer, {
    A: 0,
    B: 0,
    C: 0,
    D: 0,
    E: 0,
  });

  return (
    <div>
      <h1>Use Reducer Hook</h1>
      <p>{state.A}</p>
      <p>{state.B}</p>
      <p>{state.C}</p>
      <p>{state.D}</p>
      <p>{state.E}</p>

      <button
        onClick={() =>
          dispatch({ type: REDUCER_FUNCTION.INCREASE, payload: "A" })
        }
      >
        DispatchA
      </button>
      <button
        onClick={() =>
          dispatch({ type: REDUCER_FUNCTION.DECREASE, payload: "B" })
        }
      >
        DispatchB
      </button>
      <button onClick={() => dispatch({ type: "INCREASE", payload: "C" })}>
        DispatchC
      </button>
      <button onClick={() => dispatch({ type: "INCREASE", payload: "D" })}>
        DispatchD
      </button>
      <button onClick={() => dispatch({ type: "INCREASE", payload: "E" })}>
        DispatchE
      </button>
    </div>
  );
}
