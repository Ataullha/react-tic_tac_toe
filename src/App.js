import './App.css';
import { useState } from 'react';

const Square = ({ value, onSquareClick }) => {

  return (
    <button className='square' onClick={onSquareClick}>{value}</button>
  )
}

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if ((squares[a] === squares[b]) && (squares[b] === squares[c]) && squares[c] === squares[a]) {
      return squares[a]
    }
  }
  return;
}

const Board = () => {



  const [squares, setSquares] = useState(["", "", "", "", "", "", "", "", ""])
  const [go, setGo] = useState("X")



  const handleClick = (i) => {

    const nextSquares = squares.slice();
    if (squares[i] === 'X' || squares[i] === 'O' || calculateWinner(squares)) {
      return;
    }

    if (go === "X") {
      nextSquares[i] = "X";
      setGo("O")
    } else {
      nextSquares[i] = "O";
      setGo("X")
    }

    setSquares(nextSquares);
  }



  let status = null;
  const winner = calculateWinner(squares)

  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Now: ' + (go === 'X' ? 'X' : 'O') + "'s move.";
  }

  const resetGame = () => {
    setSquares(["","","","","","","","",""])
    setGo("X")
  }


  return (
    <>

      <div className='status'>{status}</div>


      <div className='board-row'>
        <Square value={squares[0]} onSquareClick={() => { handleClick(0) }} />
        <Square value={squares[1]} onSquareClick={() => { handleClick(1) }} />
        <Square value={squares[2]} onSquareClick={() => { handleClick(2) }} />
      </div>
      <div className='board-row'>
        <Square value={squares[3]} onSquareClick={() => { handleClick(3) }} />
        <Square value={squares[4]} onSquareClick={() => { handleClick(4) }} />
        <Square value={squares[5]} onSquareClick={() => { handleClick(5) }} />
      </div>
      <div className='board-row'>
        <Square value={squares[6]} onSquareClick={() => { handleClick(6) }} />
        <Square value={squares[7]} onSquareClick={() => { handleClick(7) }} />
        <Square value={squares[8]} onSquareClick={() => { handleClick(8) }} />
      </div>
      <div className='reset-button'>
        <button onClick={() => {resetGame()}}>reset</button>
      </div>
    </>
  )
}


function App() {
  return (
    <div className="App">
      <Board />
    </div>
  );
}

export default App;
