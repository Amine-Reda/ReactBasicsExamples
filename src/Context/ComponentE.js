import React, { Component } from "react";
import ComponentC from "./ComponentC";
import ComponentF from "./ComponentF";

class ComponentE extends Component {
  render() {
    return (
      <div>
        <ComponentF />
      </div>
    );
  }
}

export default ComponentE;
