import "./hide.css";
import { useState } from "react";
import style from "./HideEle.Module.css";

export default function App() {
  const [hideEle, setHideEle] = useState(0);
  function hide() {
    setHideEle((prev) => !prev);
  }
  const hideCSS = {
    backgroundColor: "red",
    color: "white",
    padding: "1rem",
    fontSize: "2rem",
  };
  return (
    <div className="App">
      <h3 style={hideCSS}>Internal Styling</h3>
      <h3 style={{ backgroundColor: "blue", color: "grey", padding: "1rem" }}>
        Internal Styling
      </h3>
      <h2 className={hideEle ? "hide" : "show"}>Click the button to hide me</h2>
      <button onClick={() => hide()} className={style.buttonStyle}>
        CLick Me
      </button>
    </div>
  );
}
