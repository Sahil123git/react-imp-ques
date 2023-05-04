import React, { useContext } from "react";
import { MyContext } from "./useContextChilds";

const ChildFile = () => {
  const { name, setnName } = useContext(MyContext);
  return (
    <div>
      <h3>Hii {name}</h3>
      <button onClick={setnName}>Click me</button>
    </div>
  );
};

export default ChildFile;
