import React, { Component } from "react";
import MemoComponent from "../Memo/MemoComponent";
import PureComp from "./PureComponent";
import RegComponent from "./RegComponent";

class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "amine",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        amine: "amine",
      });
    }, 2000);
  }

  render() {
    console.log("************Parent Comp render");
    return (
      <div>
        Parent Component
        <MemoComponent name={this.state.name} />
        <RegComponent name={this.state.name} />
        <PureComp name={this.state.name} />
      </div>
    );
  }
}

export default ParentComp;
