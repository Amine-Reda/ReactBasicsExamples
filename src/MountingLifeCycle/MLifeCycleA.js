import React, { Component } from "react";
import LifeCyleB from "./MLifecycleB";
class MLifeCycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "amine",
    };
    console.log("LifecycleA constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifecycleA getDerivedStateFromProps");
    return null;
  }
  componentDidMount() {
    console.log("LifecycleA componentDidMount");
  }

  render() {
    console.log("LifecycleA render");
    return (
      <div>
        LifeCyle A
        <LifeCyleB />
      </div>
    );
  }
}

export default MLifeCycleA;
