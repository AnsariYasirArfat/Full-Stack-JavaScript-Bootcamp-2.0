import { useTicTacToe } from "./useTicTacToe";

const TicTacToe = () => {
  const { board, isXNext, winner, handleClick, handleReset } = useTicTacToe();

  const renderSquare = (index) => {
    return (
      <button
        className="w-20 h-20 bg-gray-200 m-1 text-4xl font-bold"
        onClick={() => handleClick(index)}
      >
        {board[index]}
      </button>
    );
  };

  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else if (board.every((square) => square !== null)) {
    status = "It's a draw!";
  } else {
    status = "Next Player: " + (isXNext ? "X" : "O");
  }

  return (
    <div>
      <div className="text-4xl font-bold mb-4">{status}</div>
      <div className="grid grid-cols-3">
        {board.map((_, index) => renderSquare(index))}
      </div>
      <div>
        <button
          className="mt-4 bg-slate-500 p-2 text-xl font-bold rounded-lg"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default TicTacToe;
