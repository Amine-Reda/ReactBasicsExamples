import React, { Component } from "react";

class RefsDemo extends Component {
  constructor(props) {
    super(props);
    // this.inputRef = React.createRef();
    this.callBackRef = null;
    this.setcallBackRef = (element) => {
      this.callBackRef = element;
    };
  }

  componentDidMount() {
    // this.inputRef.current.focus();
    if (this.callBackRef) {
      this.callBackRef.focus();
    }
  }

  clickHandler() {
    //  alert(this.inputRef.current.value);
  }

  render() {
    return (
      <div>
        {/* <input ref={this.inputRef} type="text" />*/}

        <input ref={this.setcallBackRef} type="text" />

        {/*  <button
          onClick={() => {
            this.clickHandler();
          }}
        >
          Click
        </button>*/}
      </div>
    );
  }
}

export default RefsDemo;
