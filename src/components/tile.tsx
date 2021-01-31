import React from "react";

export default function Tile(props: {
  num: number;
  row: number;
  col: number;
  ev: (r: number, c: number) => void;
}) {
  let func = () => {
    props.ev(props.row, props.col);
  };
  return <div onClick={func} className={"tile" + (props.num === 0 ? " hole" : "")}>{props.num}</div>;
}
