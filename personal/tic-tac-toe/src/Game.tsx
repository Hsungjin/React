import { useState } from "react";

const INITIAL_GAME_STATE = ["", "", "", "", "", "", "", "", ""];

function Game() {
  const [gameState, setGameState] = useState(INITIAL_GAME_STATE);

  const handleCellClick = (index: number) => {
    const newGameState = [...gameState];
    newGameState[index] = "X";
    setGameState(newGameState);
  };

  const handleRestart = () => {
    setGameState(INITIAL_GAME_STATE);
  };

  return (
    <div className="h-full p-8 text-slate-800 bg-gradient-to-r from-cyan-500 to-blue-500 flex flex-col items-center justify-center">
      <h1 className="text-center text-5xl mb-8 font-display text-white">
        Tic Tac Toe
      </h1>

      <div>
        <div className="grid grid-cols-3 gap-4 mx-auto">
          {gameState.map((player, index) => (
            <div
              key={index}
              className="w-36 h-36 border-solid border-4 border-white bg-blue-500 font-display text-7xl text-center text-black flex items-center justify-center"
              onClick={() => handleCellClick(index)}
            >
              {player}
            </div>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <button
            className="bg-amber-500 text-slate-800 px-4 py-2 rounded-md"
            onClick={handleRestart}
          >
            Restart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Game;
