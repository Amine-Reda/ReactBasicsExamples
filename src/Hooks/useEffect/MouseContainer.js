import React, { useState } from "react";
import HookMouse from "./HookMouse";

function MouseContainer() {
  const [display, setDisplay] = useState(true);

  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toggle display</button>
      {display && <HookMouse />/* if we clcik on the button the to toggle display the 
                                useEffect of HookMouse stil running 
                                on class component we can use componentwillunmount() and
                                 stope the rendring
                                */}
    </div>
  );
}

export default MouseContainer;
