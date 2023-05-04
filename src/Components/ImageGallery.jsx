import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  const [cnt, setCnt] = useState(0);
  const arr = [];
  arr.push(
    "https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg"
  );
  arr.push(
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
  );
  arr.push(
    "https://cdn.pixabay.com/photo/2016/11/04/21/34/beach-1799006__480.jpg"
  );
  arr.push(
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
  );

  function Decrement() {
    if (cnt > 0) {
      setCnt((prevCnt) => prevCnt - 1);
    }
  }
  function Increment() {
    if (cnt + 1 < arr.length) {
      setCnt((prevCnt) => prevCnt + 1);
    }
  }
  return (
    <div className="App">
      <h1>Image Gallery</h1>
      <img src={arr[cnt]} width="300" alt="Gallery" />
      <br />
      <button onClick={Decrement}>Prev</button>
      &nbsp;
      <button onClick={Increment}>Next</button>
    </div>
  );
}
