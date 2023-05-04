import "./App.css";
import { useState } from "react";

function App() {
  const arr = ["Sahil", "Rahil", "Raj", "Faiz"];

  const showList = () => {
    const wrapper = document.querySelector(".Wrapper");
    const ele = document.createElement("li");
    ele.innerText = "Micheal Jackson";
    wrapper.appendChild(ele);

    arr.map((text, index) => {
      const ele1 = document.createElement("li");
      ele1.innerText = text;
      wrapper.appendChild(ele1);
      return 1;
    });
  };
  return (
    <div>
      <h1>Click button to See the list</h1>
      <button onClick={showList}>Click Me</button>
      <ul className={"Wrapper"}></ul>
    </div>
  );
}

export default App;

/*or we can Do like this also using React.createElement
Syntax: React.createElement(type, [props], [...children])
React.createElement(
  "li",
  { className: "CsName", style: { color: "blue", fontWeight: "bold" } },
  "Item 1"
);*/

/*import React from "react";

function App() {
  return (
    <div>
      {React.createElement("ul", null,
        React.createElement("li", null, "Michael Jackson"),
        React.createElement("li", null, "The Weeknd"),
        React.createElement("li", null, "Shakira"),
        React.createElement("li", null, "Britney Spears")
      )}
    </div>
  );
}

export default App;
*/
