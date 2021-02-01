import React, { useState } from "react";

export default function Dialogue(props: {
  title: string;
  onExit: () => void;
  content: JSX.Element;
  buttons: { str: string; onClick: () => void }[];
}) {
  return (
    <div className="dialogue-fullscreen">
      <div className="dialogue">
        <div className="dialogue-title">
          <span>{props.title}</span>
          <div className="dialogue-exit" onClick={() => props.onExit()}>
            ✗
          </div>
        </div>
        {props.content}
        {props.buttons.map(({ str, onClick }, i) => (
          <div onClick={() => onClick()} key={`${props.title}/${i}`} className="dialogue-button">
            {str}
          </div>
        ))}
      </div>
    </div>
  );
}
