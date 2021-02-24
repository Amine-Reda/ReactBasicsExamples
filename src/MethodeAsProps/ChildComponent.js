import React from "react";

function ChildComponent({ props }) {
  return (
    <div>
      <button
        onClick={() => {
          props.methode("child");
        }}
      >
        Click from child
      </button>
    </div>
  );
}

export default ChildComponent;
