import React, { useEffect, useState } from "react";

function IntervalHookCounter() {
  const [count, setCount] = useState(0);

  const tick = () => {
    setCount(count + 1);
    /*setCount((prevCount) => prevCount + 1);*/
  };

  useEffect(() => {
    const interval = setInterval(tick, 1000);
   
    return () => {
      clearInterval(interval);
    };
  }, [count]); /* we should add count to array to work or change methode tick withoud add count to array
                look up:*/

  return <div>{count}</div>;
}

export default IntervalHookCounter;
