import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

class ParentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "parent",
    };
    this.methodeParent = this.methodeParent.bind(this);
  }

  methodeParent(child) {
    alert(`this is the ${this.state.message} from ${child}`);
  }

  render() {
    return (
      <div>
        <ChildComponent methode={this.methodeParent} />
      </div>
    );
  }
}

export default ParentComponent;
