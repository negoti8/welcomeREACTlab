// Your code here!
import React from "react";
import ReactDOM from "react-dom";
ReactDOM.render(<h1>Hello World</h1>, document.getElementById("app"));

const Counter = () => {
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
