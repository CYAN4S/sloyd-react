import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Header from "./components/header";
import Board from "./components/board"

function App() {
  return (
    <>
      <Header />
      <Board row={3} col={3} />
    </>
  );
}

export default App;
