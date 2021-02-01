import React, { useState } from "react";

import Header from "./header";
import Board from "./board";
import ResizeDialogue from "./resizeDialogue";

export default function Game() {
  const [size, setSize] = useState({ row: 4, col: 4 });
  const [dialogue, setDialogue] = useState(false);

  const onResizeClick = () => {
    setDialogue(true);
  };

  const onResizeOff = () => {
    setDialogue(false);
  };

  const onResizeApply = (row: number, col: number) => {
    setSize({ row, col });
  };

  return (
    <div>
      <Header />
      <Board size={size} />
      {dialogue ? (
        <ResizeDialogue
          row={size.row}
          col={size.col}
          onApply={onResizeApply}
          onExit={onResizeOff}
        />
      ) : null}

      <div className="tool">
        <div onClick={onResizeClick}>RESIZE</div>
        {/* <div>SHUFFLE</div>
        <div>SOLVE</div> */}
      </div>
    </div>
  );
}
