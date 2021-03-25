import React, { useState, useEffect } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import Nav from "./Nav";

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <div>
        <h1>counter: {counter}</h1>
        <Nav />
        <button onClick={() => dispatch({ type: "INCREMENT" })}>
          increment
        </button>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
