import React, { useState, useContext } from "react";
import ChildFile from "./ChildFile";

export const MyContext = React.createContext();
const useContextChilds = () => {
  const [name, setName] = useState("Sahil");
  function setnName() {
    setName("Rock");
  }

  return (
    <div>
      <h1>{name}</h1>
      <MyContext.Provider value={{ name, setnName }}>
        <ChildFile />
      </MyContext.Provider>
    </div>
  );
};

export default useContextChilds;
