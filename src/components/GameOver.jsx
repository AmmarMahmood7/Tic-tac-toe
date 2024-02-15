import React from "react";

const GameOver = ({ winner, onRematch }) => {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {winner && <p>{winner} won</p>}
      {!winner && <p>It's a tie!</p>}
      <button onClick={onRematch}>Play Again?</button>
    </div>
  );
};

export default GameOver;
