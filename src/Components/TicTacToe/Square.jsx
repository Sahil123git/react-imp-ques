import "./Square.css";
function Square({ val, setMat, index }) {
  return (
    // <div>
    <button onClick={() => setMat(index)}>{val}</button>
    // </div>
  );
}

export default Square;
