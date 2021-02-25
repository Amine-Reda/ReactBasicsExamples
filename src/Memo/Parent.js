import React, { useEffect, useState } from "react";
import MemoComponent from "./MemoComponent";

function Parent({ name }) {
  const [param, setParam] = useState("ami");

  console.log("***************Parent");
  return (
    <div>
      <button
        onClick={() => {
          setParam(name);
        }}
      >
        change the name
      </button>
      {param}
      <MemoComponent />
    </div>
  );
}

export default Parent;
