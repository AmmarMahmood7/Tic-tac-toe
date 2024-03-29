import React from "react";

const Log = ({ turns }) => {
  return (
    <>
      {turns.map((turn) => {
        return (
          <li key={`${turn.square.row}${turn.square.col}`}>
            {turn.player} selected {turn.square.row}, {turn.square.col}
          </li>
        );
      })}
    </>
  );
};

export default Log;
