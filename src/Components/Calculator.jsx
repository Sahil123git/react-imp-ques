import React, { useState } from "react";
import { Link } from "react-router-dom";

const Calculator = () => {
  const one = document.querySelector(".one");
  const two = document.querySelector(".two");

  const [value, setValue] = useState(1);
  const [error, setError] = useState("");
  const [chk, setChk] = useState(1);

  const Add = () => {
    if (one == null || one.value === "" || two.value === "") {
      console.log("error", chk);
      setError("Please enter a number");
      setChk(1);
    } else {
      console.log("dfs");
      console.log(one.value);
      setChk(0);
      setValue(parseInt(one.value) + parseInt(two.value));
    }
  };
  const Sub = () => {
    if (one == null || one.value === "" || two.value === "") {
      console.log("error", chk);
      setError("Please enter a number");
      setChk(1);
    } else {
      console.log("dfs");
      console.log(one.value);
      setChk(0);
      setValue(parseInt(one.value) - parseInt(two.value));
    }
  };

  const Mul = () => {
    if (one == null || one.value === "" || two.value === "") {
      console.log("error", chk);
      setError("Please enter a number");
      setChk(1);
    } else {
      console.log("dfs");
      console.log(one.value);
      setChk(0);
      setValue(parseInt(one.value) * parseInt(two.value));
    }
  };
  const Div = () => {
    if (one == null || one.value === "" || two.value === "") {
      console.log("error", chk);
      setError("Please enter a number");
      setChk(1);
    } else {
      console.log("dfs");
      console.log(one.value);
      setChk(0);
      setValue((parseInt(one.value) / parseInt(two.value)).toFixed(2));
    }
  };

  return (
    <div>
      <h1>Calculator</h1>

      <div className="opern">
        <input type="number" className="one" />
        <br />
        <input type="number" className="two" />
        <br />

        <button onClick={Add}>Add</button>
        <button onClick={Sub}>Subtract</button>
        <button onClick={Mul}>Multiply</button>
        <button onClick={Div}>Divide</button>
      </div>
      {chk ? <h2>{error}</h2> : <h2 className="box">{value}</h2>}

      <h3>Want to submit form for this??</h3>
      <li>
        <Link to={"/form"}>form</Link>
      </li>
      <li>
        <Link to={"/formPract"}>Form Pract</Link>
      </li>
    </div>
  );
};

export default Calculator;
