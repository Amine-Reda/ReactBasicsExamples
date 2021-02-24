import React, { useEffect, useState } from "react";

function HookMouse() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = (e) => {
    console.log("Mouse event");
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    console.log("useEffect called");
    window.addEventListener("mousemove", logMousePosition);
    return () => {
      console.log("component unmounting");
      window.removeEventListener("mousemove", logMousePosition); /*this is the line that will stop the rendring 
                                                                 that already saw on the MouseContainer */
    };
  }, []); /* the blank array let that useEffect run one time but logmMousePosition he will rendering
   in every change,try to delete tha blank array */

  return (
    <div>
      Hook X:{x} Y:{y}
    </div>
  );
}

export default HookMouse;
