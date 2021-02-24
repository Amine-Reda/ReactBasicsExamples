import React, { Component } from "react";

class Binding extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "hello",
    };

    this.changeMessage = this.changeMessage.bind(this);
  }

  changeMessage() {
    this.setState({
      message: "Hi",
    });
  }

  render() {
    return (
      <div>
        <p>{this.state.message}</p>
        <button onClick={this.changeMessage}>Click</button>
        <button
          onClick={() => {
            this.changeMessage();
          }}
        >
          Click
        </button>
      </div>
    );
  }
}

export default Binding;
/*
import React from "react";
import { useState } from "react";

const Binding = () => {
  const [message, setMessage] = useState("Hello");

  const changeMessage = () => {
    setMessage("hi");
  };

  return (
    <div>
      <p>{message}</p>
      <button onClick={changeMessage}>Click</button>
    </div>
  );
};

export default Binding;

*/
