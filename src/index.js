// Your code here!
import React, { useState } from "react";
import ReactDOM from "react-dom";

const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  return (
    <div id="container">
      <div id="navbar">Counter.js</div>
      <div id="counter">
        <h1>0</h1>
        <button>Increment</button>
      </div>
    </div>
  );
};

ReactDOM.render(<Counter />, document.getElementById("app"));
