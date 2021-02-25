import React, { useState, useMemo } from "react";

function CounterM() {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 2000000000) i++;
    return counterOne % 2 === 0;
  }, [counterOne]);

  /*
   const isEven = () => {
    let i = 0;
    while (i < 2000000000) i++;      //to sloww the functionto see the problem
    return counterOne % 2 === 0;     // he make counter one slow normaly but also counter two also solw
                                     // because every time the state updated yhe component rerender so 
                                     //   the function called again
  };                                 // the solution is that tell to react to not do something unnecessary=>useMemo:he use the cash value for last render
*/
  const incrementOne = () => {
    setCounterOne(counterOne + 1);
  };

  const incrementTwo = () => {
    setCounterTwo(counterTwo + 1);
  };

  return (
    <div>
      <div>
        <button onClick={incrementOne}>Count One -{counterOne}</button>
        <span>{/*isEven()*/ isEven ? "Even" : "Odd"}</span>{" "}
        {/*delete the parenthesis because isEven its a value not function */}
      </div>
      <div>
        <button onClick={incrementTwo}>Count Two -{counterTwo}</button>
      </div>
    </div>
  );
}

export default CounterM;
