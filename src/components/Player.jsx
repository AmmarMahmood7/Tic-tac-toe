import React, { useState } from "react";

const Player = ({ name, symbol, isActive, onChangeName }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {isEditing ? (
          <input
            type="text"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
          />
        ) : (
          <span className="player-name">{playerName}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button
        onClick={() => {
          setIsEditing((isEditing) => !isEditing);
          if (isEditing) onChangeName(symbol, playerName);
        }}
      >
        {isEditing ? "Save" : "Edit"}
      </button>
    </li>
  );
};

export default Player;
