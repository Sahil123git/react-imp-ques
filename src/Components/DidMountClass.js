import React, { Component } from "react";

class DidMountClass extends Component {
  componentDidMount() {
    console.log("ComponentDidMount");
  }
  render() {
    return (
      <div>
        <h1>Hello</h1>
      </div>
    );
  }
}

export default DidMountClass;
