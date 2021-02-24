import React, { useReducer } from "react";

const initialState = { firstCounter: 0, secoundCounter: 10 };
const reducer = (state, action) => {
  switch (action.type) {
    case "increment1":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "decrement1":
      return { ...state, firstCounter: state.firstCounter - action.value };
    case "increment2":
      return { ...state, secoundCounter: state.secoundCounter + action.value };
    case "decrement2":
      return { ...state, secoundCounter: state.secoundCounter - action.value };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

export default function CounterTwo() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      firstCounter: {count.firstCounter}
      <button
        onClick={() => {
          dispatch({ type: "increment1", value: 1 });
        }}
      >
        Increment 1
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decrement1", value: 1 });
        }}
      >
        Decrement 1
      </button>
      <button
        onClick={() => {
          dispatch({ type: "increment1", value: 5 });
        }}
      >
        Increment 5
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decrement1", value: 5 });
        }}
      >
        Decrement 5
      </button>
      <div>
        secoundCounter: {count.secoundCounter}
        <button
          onClick={() => {
            dispatch({ type: "increment2", value: 1 });
          }}
        >
          Increment secoundCounter 1
        </button>
        <button
          onClick={() => {
            dispatch({ type: "decrement2", value: 1 });
          }}
        >
          Decrement secoundCounter 1
        </button>
      </div>
      <button
        onClick={() => {
          dispatch({ type: "reset" });
        }}
      >
        Reset
      </button>
    </div>
  );
}
