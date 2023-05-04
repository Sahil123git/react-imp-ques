import React, { useRef } from "react";
//An uncontrolled component is a component where the value of the input is controlled by the DOM. In other words, the state of the input is not managed by React, but rather by the DOM itself.
const UncontrolledComponent = () => {
  const nameRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name:", nameRef.current.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" ref={nameRef} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default UncontrolledComponent;
