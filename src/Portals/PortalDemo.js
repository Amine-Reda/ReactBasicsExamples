import React from "react";
import ReactDOM from "react-dom";

function PortalDemo() {
  return ReactDOM.createPortal(
    <div>Portal Demo</div>,
    document.getElementById("portal-root")
  );
}

export default PortalDemo;

/* 
rendring the Component on the portal-root DOM node
 that created on index.html not on the root Dom node

 check the links https://codesandbox.io/s/stoic-napier-44n77?file=/src/index.js:286-298
                 https://codepen.io/gaearon/pen/jGBWpE
*/
