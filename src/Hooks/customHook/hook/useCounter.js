import { useState } from "react";

function useCounter(initialSatate = 0, value) {
  const [count, setCount] = useState(initialSatate);

  const increment = () => {
    setCount((prev) => prev + value);
  };
  const decrement = () => {
    setCount((prev) => prev - value);
  };
  const reset = () => {
    setCount(initialSatate);
  };
  return [count, increment, decrement, reset];
}

export default useCounter;
