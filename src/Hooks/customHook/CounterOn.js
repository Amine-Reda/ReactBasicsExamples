import React, { useState } from "react";
import useCounter from "./hook/useCounter";

function CounterOn() {
  const [count, increment, decrement, reset] = useCounter(10, 5);

  return (
    <div>
      <h2>Count {count}</h2>
      <button onClick={() => increment()}>icrement</button>
      <button onClick={() => decrement()}>decrement</button>
      <button onClick={() => reset()}>reset</button>
    </div>
  );
}

export default CounterOn;
