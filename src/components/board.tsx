import React, { useEffect, useState } from "react";
import Tile from "./tile";

export default function Board(props: { row: number; col: number }) {
  const [board, setBoard] = useState(() => {
    let arr = Array.from({ length: props.row }, (v, i) =>
      Array.from({ length: props.col }, (w, j) => i * props.col + j + 1)
    );
    arr[props.row - 1][props.col - 1] = 0;
    return { arr, row: props.row - 1, col: props.col - 1 };
  });

  const MoveLeft = (value: number) => {
    console.log(board.arr);
    if (value < 1 || board.col === props.col - 1) {
      return;
    }
    let res = board.arr.map((x) => [...x]);
    for (let index = 0; index < value; index++) {
      res[board.row][board.col + index] = res[board.row][board.col + index + 1];
    }
    res[board.row][board.col + value] = 0;

    setBoard({ arr: res, col: board.col + value, row: board.row });
  };

  const MoveRight = (value: number) => {
    console.log(board.arr);
    if (value < 1 || board.col === 0) {
      return;
    }

    let res = board.arr.map((x) => [...x]);
    for (let index = 0; index < value; index++) {
      res[board.row][board.col - index] = res[board.row][board.col - index - 1];
    }
    res[board.row][board.col - value] = 0;

    setBoard({ arr: res, col: board.col - value, row: board.row });
  };

  const MoveUp = (value: number) => {
    console.log(board.arr);
    if (value < 1 || board.row === props.row - 1) {
      return;
    }
    let res = board.arr.map((x) => [...x]);
    for (let index = 0; index < value; index++) {
      res[board.row + index][board.col] = res[board.row + index + 1][board.col];
    }
    res[board.row + value][board.col] = 0;

    setBoard({ arr: res, col: board.col, row: board.row + value });
  };

  const MoveDown = (value: number) => {
    console.log(board.arr);
    if (value < 1 || board.row === 0) {
      return;
    }
    let res = board.arr.map((x) => [...x]);
    for (let index = 0; index < value; index++) {
      res[board.row - index][board.col] = res[board.row - index - 1][board.col];
    }
    res[board.row - value][board.col] = 0;

    setBoard({ arr: res, col: board.col, row: board.row - value });
  };

  // EVENT
  const OnTilePressed = (r: number, c: number) => {
    if (r == board.row) {
      if (c > board.col) {
        MoveLeft(c - board.col);
      } else {
        MoveRight(board.col - c);
      }
    } else if (c == board.col) {
      if (r > board.row) {
        MoveUp(r - board.row);
      } else {
        MoveDown(board.row - r);
      }
    }
  };

  // KEYBOARD INPUT
//   const OnKeyDown = (ev: KeyboardEvent) => {
//     console.log(ev.key);

//     if (ev.key === "ArrowLeft") {
//       MoveLeft(1);
//     } else if (ev.key === "ArrowRight") {
//       MoveRight(1);
//     }
//   };
//   useEffect(() => {
//     document.addEventListener("keydown", OnKeyDown);
//     return () => {
//       document.removeEventListener("keydown", OnKeyDown);
//     };
//   }, []);

//   useEffect(() => {
//     console.log(board.arr);
//   });

  return (
    <div
      className="board"
      style={{ gridTemplateColumns: `repeat(${props.col}, auto)` }}
      tabIndex={0}
    >
      {board.arr.map((element, i) =>
        element.map((n, j) => (
          <Tile num={n} row={i} col={j} ev={OnTilePressed} key={i + "-" + j} />
        ))
      )}
    </div>
  );
}
