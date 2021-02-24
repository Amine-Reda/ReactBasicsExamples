import { useContext } from "react";
import React from "react";
import { CountContext } from "./Demo";

function ComponentF() {
  const countContext = useContext(CountContext);

  return (
    <div>
      Component F
      <button
        onClick={() => {
          countContext.countDispatch("increment");
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          countContext.countDispatch("decrement");
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          countContext.countDispatch("reset");
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default ComponentF;
