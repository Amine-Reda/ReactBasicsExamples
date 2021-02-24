import React, { Component } from "react";
import ULifeCyleB from "./ULifecycleB";
class ULifeCycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "parentState",
    };
    this.changeState = this.changeState.bind(this);
    console.log("LifecycleA constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifecycleA getDerivedStateFromProps");
    return null;
  }
  componentDidMount() {
    console.log("LifecycleA componentDidMount");
  }
  shouldComponentUpdate() {
    console.log("LifeCycleA shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifeCycleA getSnapshotBeforeUpdate");
    console.log(prevProps);
    console.log(prevState);
    return null;
  }

  componentDidUpdate() {
    console.log("LifeCycleA componentDidUpdate");
  }

  changeState() {
    this.setState({
      name: "parentStateChange",
    });
  }

  render() {
    console.log("LifecycleA render");
    return (
      <div>
        LifeCycle A<button onClick={this.changeState}>change state</button>
        <ULifeCyleB name={this.state.name} />
      </div>
    );
  }
}

export default ULifeCycleA;
