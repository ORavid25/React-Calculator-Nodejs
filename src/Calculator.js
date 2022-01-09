import React, { useState, useEffect } from "react";
import "./style.css";

const Calculator = () => {
  const [previousInput, setPreviousInput] = useState("");
  const [currentInput, setCurrentInput] = useState("");
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState("");



  //let us know which operator was choosed
  const operatorChoose = (operator) => {
    if (operator) {
      switch (operator) {
        case "/":
          setOperator("/");
          break;
        case "X":
          setOperator("*");
          break;
        case "-":
          setOperator("-");
          break;
        case "+":
          setOperator("+");
          break;
      }
    } else {
      return;
    }
  };


  const getResult = () => {

    const firstNum = parseInt(previousInput);
    const secondNum = parseInt(currentInput);

    let res;
    switch (operator) {
        case '+':
            res = firstNum + secondNum;
            break;
        case '-':
            res = firstNum - secondNum;
            break;
        case '/':
            res = firstNum / secondNum;
            break;
        case '*':
            res = firstNum * secondNum;
            break;
    }
    setResult(res);
    console.log("res is",res)
  }

  useEffect(() => {
    console.log("current", currentInput);
    console.log("previous", previousInput);
    console.log("Operator",operator);
  });

  return (
    <div className="mainDiv">
      <div className="calcWrapper">
        <div dir="rtl" className="outputDiv">
          <div className="previous">
            {/* <p>{operator}{previousInput}{operator && currentInput}</p> */}
            <p>{result ? previousInput + operator + currentInput : operator + previousInput}</p>
          </div>
          <div className="current">
            <p>{result ? result:currentInput}</p>
          </div>
        </div>
        <div className="buttonsDiv">
          <button
            className="span-two"
            onClick={() => {
              setCurrentInput("");
              setPreviousInput("");
              setOperator("");
              setResult("");
            }}
          >
            AC
          </button>
          <button className="span-two">C</button>
          <button
            className="grid-item"
            onClick={() => {
             operator === "" ? setPreviousInput((prev)=> prev + 1) : setCurrentInput((prev) => prev + 1);
            }}
          >
            1
          </button>

          <button
            className="grid-item"
            onClick={() => {
                operator === "" ? setPreviousInput((prev)=> prev + 2) : setCurrentInput((prev) => prev + 2);
            }}
          >
            2
          </button>
          <button
            className="grid-item"
            onClick={() => {
                operator === "" ? setPreviousInput((prev)=> prev + 3) : setCurrentInput((prev) => prev + 3);

            }}
          >
            3
          </button>
          <button
            className="grid-item"
            onClick={() => {
              operatorChoose("/");
          
            }}
          >
            /
          </button>
          <button
            className="grid-item"
            onClick={() => {
                operator === "" ? setPreviousInput((prev)=> prev + 4) : setCurrentInput((prev) => prev + 4);
            }}
          >
            4
          </button>
          <button
            className="grid-item"
            onClick={() => {
                operator === "" ? setPreviousInput((prev)=> prev + 5) : setCurrentInput((prev) => prev + 5);

            }}
          >
            5
          </button>
          <button
            className="grid-item"
            onClick={() => {
                operator === "" ? setPreviousInput((prev)=> prev + 6) : setCurrentInput((prev) => prev + 6);

            }}
          >
            6
          </button>
          <button
            className="grid-item"
            onClick={() => {
              operatorChoose("X");
           
              
            }}
          >
            X
          </button>
          <button
            className="grid-item"
            onClick={() => {
                operator === "" ? setPreviousInput((prev)=> prev + 7) : setCurrentInput((prev) => prev + 7);

            }}
          >
            7
          </button>
          <button
            className="grid-item"
            onClick={() => {
                operator === "" ? setPreviousInput((prev)=> prev + 8) : setCurrentInput((prev) => prev + 8);
            }}
          >
            8
          </button>
          <button
            className="grid-item"
            onClick={() => {
                operator === "" ? setPreviousInput((prev)=> prev + 9) : setCurrentInput((prev) => prev + 9);

            }}
          >
            9
          </button>
          <button
            className="grid-item"
            onClick={() => {
              operatorChoose("-");
         
            }}
          >
            -
          </button>
          <button className="grid-item">.</button>
          <button
            className="grid-item"
            onClick={() => {
                operator === "" ? setPreviousInput((prev)=> prev + 0) : setCurrentInput((prev) => prev + 0);

            }}
          >
            0
          </button>
          <button
            className="grid-item"
            onClick={() => {
              operatorChoose("+");
         
            }}
          >
            +
          </button>

          <button className="grid-item"
          onClick={() => {
            getResult();
          }}
          >=</button>
        </div>
      </div>
    </div>
  );
};
export default Calculator;
