import React, { Component } from "react";
class MLifeCyleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "amine",
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

  render() {
    console.log("LifecycleB render");
    return <div>LifeCyle B</div>;
  }
}

export default MLifeCyleB;
