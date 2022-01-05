import React, { useState,useEffect } from "react";
import "./style.css";

const Calculator = () => {
  const [previousInput, setPreviousInput] = useState("");
  const [currentInput, setCurrentInput] = useState("");


  useEffect(() => {
      console.log("current", currentInput);
     
  })

  return (
    <div className="mainDiv">
      <div className="calcWrapper">
        <div dir="rtl" className="outputDiv">
          <div className="previous">
            <p>80</p>
          </div>
          <div className="current">
            <p>50</p>
          </div>
        </div>
        <div className="buttonsDiv">
          <button className="span-two">AC</button>
          <button className="span-two">C</button>
          <button
            className="grid-item"
            onClick={() => {
              setCurrentInput((prev) => prev + 1);
            }}
          >
            1
          </button>

          <button
            className="grid-item"
            onClick={() => {
              setCurrentInput((prev) => prev + 2);
            }}
          >
            2
          </button>
          <button
            className="grid-item"
            onClick={() => {
              setCurrentInput((prev) => prev + 3);
            }}
          >
            3
          </button>
          <button className="grid-item">/</button>
          <button
            className="grid-item"
            onClick={() => {
              setCurrentInput((prev) => prev + 4);
            }}
          >
            4
          </button>
          <button
            className="grid-item"
            onClick={() => {
              setCurrentInput((prev) => prev + 5);
            }}
          >
            5
          </button>
          <button
            className="grid-item"
            onClick={() => {
              setCurrentInput((prev) => prev + 6);
            }}
          >
            6
          </button>
          <button className="grid-item">X</button>
          <button
            className="grid-item"
            onClick={() => {
              setCurrentInput((prev) => prev + 7);
            }}
          >
            7
          </button>
          <button
            className="grid-item"
            onClick={() => {
              setCurrentInput((prev) => prev + 8);
            }}
          >
            8
          </button>
          <button
            className="grid-item"
            onClick={() => {
              setCurrentInput((prev) => prev + 9);
            }}
          >
            9
          </button>
          <button className="grid-item">-</button>
          <button className="grid-item">.</button>
          <button className="grid-item"     onClick={() => {
            setCurrentInput(prev => prev + 0);
        }}>0</button>
          <button className="grid-item">+</button>

          <button className="grid-item">=</button>
        </div>
      </div>
    </div>
  );
};
export default Calculator;
