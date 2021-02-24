import React from "react";
const UpdatedComponent = (OriginalComponent, incrementNumber) => {
  class NewComponent extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }
    incrementCount() {
      this.setState((prevState) => {
        return { count: prevState.count + 1 };
      });
    }
    render() {
      return (
        <OriginalComponent
          count={this.state.count}
          {...this
            .props} /* we should add this line to get props from App.js to ClickComponent and HoverComponent */
          incrementCount={() => {
            this.incrementCount();
          }}
        />
      );
    }
  }
  return NewComponent;
};

export default UpdatedComponent;
