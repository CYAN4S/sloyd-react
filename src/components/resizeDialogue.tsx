import React, { useState } from "react";

import Dialogue from "./dialogue";

function IncreaseButton(props: { ev: () => void }) {
  return <div onClick={props.ev}>+</div>;
}
function DecreaseButton(props: { ev: () => void }) {
  return <div onClick={props.ev}>-</div>;
}

export default function ResizeDialogue(props: {
  row: number;
  col: number;
  onApply: (row: number, col: number) => void;
  onExit: () => void;
}) {
  const [row, setRow] = useState(props.row);
  const [col, setCol] = useState(props.col);

  //   return (
  //     <div className="dialogue">
  //       <div className="dialogue-title"></div>
  //       <div className="resize-grid">
  //         <IncreaseButton ev={() => setRow(row + 1)} />
  //         <IncreaseButton ev={() => setCol(col + 1)} />
  //         <div>{row}</div>
  //         <div>{col}</div>
  //         <DecreaseButton ev={() => setRow(row - 1)} />
  //         <DecreaseButton ev={() => setCol(col - 1)} />
  //       </div>

  // <div
  //   onClick={() => {
  //     props.onApply(row, col);
  //     props.onExit();
  //   }}
  // >
  //   APPLY
  // </div>
  //       <div onClick={() => props.onExit()}>EXIT</div>
  //     </div>
  //   );
  return (
    <Dialogue
      title="RESIZE"
      onExit={() => props.onExit()}
      content={
        <div>
          <div className="resize-grid">
            <div>ROW</div>
            <div>COLUMN</div>
            <IncreaseButton ev={() => setRow(row + 1)} />
            <IncreaseButton ev={() => setCol(col + 1)} />
            <div>{row}</div>
            <div>{col}</div>
            <DecreaseButton ev={() => setRow(row - 1)} />
            <DecreaseButton ev={() => setCol(col - 1)} />
          </div>
        </div>
      }
      buttons={[{str: "APPLY", onClick: () => {props.onApply(row, col); props.onExit()}}]}
    />
  );
}
