import "./styles.css";
import { useState } from "react";

export default function App() {
  const arr = ["cricket", "football", "baseball"];
  const [res, setRes] = useState([]);

  function eleIncludes(res, ele) {
    if (res.includes(ele)) {
      return 0;
    } else {
      return 1;
    }
  }

  function isChecked(e) {
    let ele = e.target.value;
    console.log(ele);
    if (eleIncludes(res, ele)) {
      let nArr = [...res, ele];
      setRes((prevArr) => nArr);
      console.log(nArr);
    } else {
      let nArr = [...res];
      nArr.splice(res.indexOf(ele), 1);
      setRes((prevArr) => nArr);
    }
  }
  return (
    <div className="App">
      <h1>Check Box</h1>

      {arr.map((ele, index) => (
        <div key={index}>
          <input type="checkbox" id={ele} onChange={isChecked} value={ele} />
          <label htmlFor={ele}>{ele}</label>
        </div>
      ))}

      {res.map((ele, index) => (
        <span key={index}>{ele}, </span>
      ))}
    </div>
  );
}
