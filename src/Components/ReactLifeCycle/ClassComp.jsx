import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    // This code will run when the component is mounted (equivalent to useEffect with an empty dependency array)
    console.log("Component mounted");
  }

  componentDidUpdate(prevProps, prevState) {
    // This code will run when the component's state or props change (equivalent to useEffect with specific dependencies)
    if (prevState.count !== this.state.count) {
      console.log("Count updated");
    }
  }

  componentWillUnmount() {
    // This code will run when the component is unmounted (equivalent to useEffect cleanup function)
    console.log("Component unmounted");
  }

  increment = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    const { count } = this.state;

    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
