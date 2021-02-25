import React from "react";
import useCounter from "./hook/useCounter";

function CounterTw() {
  const [count, increment, decrement, reset] = useCounter(0, 1);
  return (
    <div>
      <h2>Count {count}</h2>
      <button onClick={() => increment()}>icrement</button>
      <button onClick={() => decrement()}>decrement </button>
      <button onClick={() => reset()}>reset</button>
    </div>
  );
}

export default CounterTw;
