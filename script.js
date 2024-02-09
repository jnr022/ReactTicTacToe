import React, {
useState,
useCallback,
useEffect } from
"https://cdn.skypack.dev/react@17.0.1";
import ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";

const TicTacToeBoard = () => {

  const [board, setBoard] = useState(Array(3).fill(Array(3).fill(null)));
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [winner, setWinner] = useState(null);
  const [isDraw, setIsDraw] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const handleMove = (row, col) => {
    if (!board[row][col] && !gameOver) {
      const newBoard = board.map((rowArr, r) =>
      rowArr.map((value, c) => r === row && c === col ? currentPlayer : value));

      setBoard(newBoard);
      setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
    }
  };

  const checkWinner = () => {
    for (let row = 0; row < 3; row++) {
      if (board[row][0] && board[row][0] === board[row][1] && board[row][0] === board[row][2]) {
        return board[row][0];
      }
    }

    for (let col = 0; col < 3; col++) {
      if (board[0][col] && board[0][col] === board[1][col] && board[2][col] === board[0][col]) {
        return board[0][col];
      }
    }

    if (board[0][0] && board[0][0] === board[1][1] && board[0][0] === board[2][2]) {
      return board[0][0];
    }

    if (board[0][2] && board[0][2] === board[1][1] && board[0][2] === board[2][0]) {
      return board[0][2];
    }

    let isDraw = true;
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        if (!board[row][col]) {
          isDraw = false;
        }
      }
      if (!isDraw) break;
    }

    if (isDraw) {
      return 'Draw';
    }
    return null;
  };

  useEffect(() => {
    const result = checkWinner(board);
    if (result) {
      if (result === 'Draw') {
        setIsDraw(true);
      } else {
        setWinner(result);
      }
      setGameOver(true);
    }
  }, [board]);

  const resetGame = () => {
    setBoard(Array(3).fill(Array(3).fill(null)));
    setCurrentPlayer('X');
    setWinner(null);
    setIsDraw(false);
    setGameOver(false);
  };

  return /*#__PURE__*/(
    React.createElement("div", { className: "tic-tac-toe-container" }, /*#__PURE__*/
    React.createElement("div", { className: "tic-tac-toe" }, /*#__PURE__*/
    React.createElement("div", { className: "tictactoe-board" },
    board.map((row, rowIndex) => /*#__PURE__*/
    React.createElement("div", { key: rowIndex, className: "row" },
    row.map((cell, colIndex) => /*#__PURE__*/
    React.createElement("button", {
      key: colIndex,
      className: `cell ${cell}`,
      onClick: () => handleMove(rowIndex, colIndex),
      disabled: cell !== null || gameOver,
      id: "neon-text" },

    cell))))), /*#__PURE__*/





    React.createElement("div", { className: "current-player" }, "Aktueller Spieler: ",
    currentPlayer), /*#__PURE__*/

    React.createElement("div", { className: "game-messages" },
    winner && /*#__PURE__*/React.createElement("div", { className: "winner-message" }, "Gewinner: ", winner),
    isDraw && !winner && /*#__PURE__*/React.createElement("div", { className: "draw-message" }, "Unentschieden!"), /*#__PURE__*/
    React.createElement("div", null, /*#__PURE__*/
    React.createElement("button", { className: "reset-button", onClick: resetGame }, "Neues Spiel starten"))))));





};


const TicTacToe = () => {
  return /*#__PURE__*/(
    React.createElement("div", { className: "tictactoe-app" }, /*#__PURE__*/
    React.createElement("h1", null, "Tic Tac Toe"), /*#__PURE__*/
    React.createElement(TicTacToeBoard, null)));


};


ReactDOM.render( /*#__PURE__*/React.createElement(TicTacToe, null), document.getElementById("root"));