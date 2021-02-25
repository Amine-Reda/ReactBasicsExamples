import React, { useEffect, useRef, useState } from "react";

function HookTimer() {
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef();

  /*useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);*/

  useEffect(() => {
    console.log("render effect");
    intervalRef.current = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);
    return () => {
      console.log("clear effect");
      clearInterval(intervalRef);
    };
  }, []);

  return (
    <div>
      Hook Timer {timer}
      <button onClick={() => clearInterval(intervalRef.current)}>
        {" "}
        clear interval
      </button>
      {/* <button onClick={() => clearInterval(interval)}>Clear Interval</button>
      there is a problem withot useRef the intervale value defind just in useffect 
      the give tha interval not defined as error  */}
    </div>
  );
}

export default HookTimer;
