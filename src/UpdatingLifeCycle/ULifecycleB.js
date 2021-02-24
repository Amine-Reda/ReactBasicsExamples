import React, { Component } from "react";
class ULifeCyleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "childState",
    };
    console.log("LifecycleB constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifecycleB getDerivedStateFromProps");
    return null;
  }
  componentDidMount() {
    console.log("LifecycleB componentDidMount");
  }
  shouldComponentUpdate() {
    console.log("LifeCycleB shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifeCycleB getSnapshotBeforeUpdate");
    console.log(prevProps);
    console.log(prevState);
    return null;
  }

  componentDidUpdate() {
    console.log("LifeCycleB componentDidUpdate");
  }

  render() {
    console.log("LifecycleB render");
    return <div>LifeCycle B {this.props.name}</div>;
  }
}

export default ULifeCyleB;
