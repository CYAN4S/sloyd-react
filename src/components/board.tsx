import React, { useEffect, useState } from "react";
import { reduceEachTrailingCommentRange } from "typescript";
import Tile from "./tile";

const init = (row: number, col: number) => {
  let arr = Array.from({ length: row }, (v, i) =>
    Array.from({ length: col }, (w, j) => i * col + j + 1)
  );
  arr[row - 1][col - 1] = 0;
  return arr;
};

export default function Board(props: { size: { row: number; col: number } }) {
  const [board, setBoard] = useState({
    arr: init(props.size.row, props.size.col),
    row: props.size.row - 1,
    col: props.size.col - 1,
  });

  useEffect(() => {
    setBoard({
      arr: init(props.size.row, props.size.col),
      row: props.size.row - 1,
      col: props.size.col - 1,
    });
  }, [props.size]);

  const MoveLeft = (value: number) => {
    if (value < 1 || board.col === props.size.col - 1) return;
    let res = board.arr.map((x) => [...x]);
    for (let index = 0; index < value; index++) {
      res[board.row][board.col + index] = res[board.row][board.col + index + 1];
    }
    res[board.row][board.col + value] = 0;

    return ({ arr: res, col: board.col + value, row: board.row });
  };

  const MoveRight = (value: number) => {
    if (value < 1 || board.col === 0) return;
    let res = board.arr.map((x) => [...x]);
    for (let index = 0; index < value; index++) {
      res[board.row][board.col - index] = res[board.row][board.col - index - 1];
    }
    res[board.row][board.col - value] = 0;

    return ({ arr: res, col: board.col - value, row: board.row });
  };

  const MoveUp = (value: number) => {
    if (value < 1 || board.row === props.size.row - 1) return;
    let res = board.arr.map((x) => [...x]);
    for (let index = 0; index < value; index++) {
      res[board.row + index][board.col] = res[board.row + index + 1][board.col];
    }
    res[board.row + value][board.col] = 0;

    return ({ arr: res, col: board.col, row: board.row + value });
  };

  const MoveDown = (value: number) => {
    if (value < 1 || board.row === 0) return;
    let res = board.arr.map((x) => [...x]);
    for (let index = 0; index < value; index++) {
      res[board.row - index][board.col] = res[board.row - index - 1][board.col];
    }
    res[board.row - value][board.col] = 0;

    return ({ arr: res, col: board.col, row: board.row - value });
  };

  // EVENT
  const OnTilePressed = (r: number, c: number) => {
    if (r === board.row) {
      if (c > board.col) {
        setBoard(MoveLeft(c - board.col)!) ;
      } else {
        setBoard(MoveRight(board.col - c)!);
      }
    } else if (c === board.col) {
      if (r > board.row) {
        setBoard(MoveUp(r - board.row)!);
      } else {
        setBoard(MoveDown(board.row - r)!);
      }
    }
  };

  return (
    <div
      className="board"
      style={{ gridTemplateColumns: `repeat(${props.size.col}, auto)` }}
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
