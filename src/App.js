import React, { useState, useEffect } from "react";
import "./App.css";
import { useSelector } from "react-redux";
import Nav from "./Nav";

function App() {
  const counter = useSelector((state) => state.counter);
  return (
    <div className="App">
      <div>
        <h1>counter: {counter}</h1>
        <Nav />
        <button>increment</button>
      </div>
    </div>
  );
}

export default App;
