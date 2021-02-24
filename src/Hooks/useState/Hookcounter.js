import React, { useState } from "react";

function Hookcounter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={increment}>count {count}</button>
    </div>
  );
}

export default Hookcounter;
