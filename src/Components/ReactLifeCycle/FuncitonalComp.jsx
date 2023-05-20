import React, { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This code will run when the component is mounted (equivalent to componentDidMount)
    console.log("Component mounted");

    return () => {
      // This code will run when the component is unmounted (equivalent to componentWillUnmount)
      console.log("Component unmounted");
    };
  }, []); // Empty dependency array ensures that this effect runs only once on mount

  useEffect(() => {
    // This code will run when the count state changes (equivalent to componentDidUpdate)
    console.log("Count updated");
  }, [count]); // Track the count state for updates

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default Counter;
