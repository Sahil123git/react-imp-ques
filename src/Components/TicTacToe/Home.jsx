import { useState } from "react";
import Square from "./Components/Square";
import "./styles.css";

export default function App() {
  const [turn, setTurn] = useState(1);
  const [matrix, setMatrix] = useState(Array(9).fill("_"));
  const [winner, setWinner] = useState("");

  const setVal = (index) => {
    if (matrix[index] === "_" && winner === "") {
      // console.log(index);
      if (turn) {
        matrix[index] = "X";
        setMatrix(matrix);
        setTurn(turn === 1 ? 0 : 1);
        // console.log(turn, " I was clicked");
      } else {
        matrix[index] = "O";
        setMatrix(matrix);
        setTurn(turn === 1 ? 0 : 1);
        // console.log(turn, " I was clicked");
      }

      // console.log(matrix[0], matrix[1], matrix[2]);
      if (
        matrix[0] !== "_" &&
        matrix[0] === matrix[1] &&
        matrix[0] === matrix[2]
      ) {
        // console.log("I won");
        setWinner(turn === 1 ? `X` : `O`);
      } else if (
        matrix[0] !== "_" &&
        matrix[0] === matrix[3] &&
        matrix[3] === matrix[6]
      ) {
        setWinner(turn === 1 ? `X` : `O`);
      } else if (
        matrix[3] !== "_" &&
        matrix[3] === matrix[4] &&
        matrix[4] === matrix[5]
      ) {
        setWinner(turn === 1 ? `X` : `O`);
      } else if (
        matrix[6] !== "_" &&
        matrix[6] === matrix[7] &&
        matrix[7] === matrix[8]
      ) {
        setWinner(turn === 1 ? `X` : `O`);
      } else if (
        matrix[1] !== "_" &&
        matrix[1] === matrix[4] &&
        matrix[7] === matrix[4]
      ) {
        setWinner(turn === 1 ? `X` : `O`);
      } else if (
        matrix[2] !== "_" &&
        matrix[2] === matrix[5] &&
        matrix[5] === matrix[8]
      ) {
        setWinner(turn === 1 ? `X` : `O`);
      } else if (
        matrix[0] !== "_" &&
        matrix[0] === matrix[4] &&
        matrix[4] === matrix[8]
      ) {
        setWinner(turn === 1 ? `X` : `O`);
      } else if (
        matrix[2] !== "_" &&
        matrix[2] === matrix[4] &&
        matrix[4] === matrix[6]
      ) {
        setWinner(turn === 1 ? `X` : `O`);
      }
      // console.log(matrix[index]);
    }
  };

  return (
    <div className="App">
      <h1>tik tac toe</h1>
      <h3>Winner is {winner}</h3>
      <div className="box">
        <div className="row">
          <Square val={matrix[0]} setMat={setVal} index={0} />
          <Square val={matrix[1]} setMat={setVal} index={1} />
          <Square val={matrix[2]} setMat={setVal} index={2} />
        </div>
        <div className="row">
          <Square val={matrix[3]} setMat={setVal} index={3} />
          <Square val={matrix[4]} setMat={setVal} index={4} />
          <Square val={matrix[5]} setMat={setVal} index={5} />
        </div>
        <div className="row">
          <Square val={matrix[6]} setMat={setVal} index={6} />
          <Square val={matrix[7]} setMat={setVal} index={7} />
          <Square val={matrix[8]} setMat={setVal} index={8} />
        </div>
      </div>
    </div>
  );
}
