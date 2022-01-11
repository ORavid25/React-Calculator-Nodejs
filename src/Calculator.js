import React, { useState, useEffect } from "react";
import "./style.css";

const Calculator = () => {
  const [previousInput, setPreviousInput] = useState("");
  const [currentInput, setCurrentInput] = useState("");
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState("");


  const getCalcResult = async (firstNum, secondNum, operator) => {
    const req = {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify({ firstNum: firstNum, secondNum: secondNum, operator: operator })
    };
    try {
      const res = await fetch(`http://localhost:3000/calc`, req);
      if (res.status !== 201 && res.status !== 200) return console.log(res);
      const data = await res.json();
      console.log(data);
      return data;
    }
    catch (error) {
      console.log(error);
      return null;
    }
  }

  useEffect(async () => {
    const res = await fetch("http://localhost:3000/api")
    // console.log("fetch /api",res);
  })



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


  const getResult = async () => {

    const res = await getCalcResult(previousInput, currentInput, operator);
    setResult(res);
    // console.log("result after is:",res)

  }

  const nextCalc = async () => {
    if (operator === "") {
      return;
    };
    console.log("seccuess");
    setPreviousInput(result);
    setResult("");
    setCurrentInput("");
  }

  useEffect(async () => {

    await nextCalc();
    console.log("current", currentInput);
    console.log("previous", previousInput);
    console.log("Operator", operator);
  }, [setOperator]);

  return (
    <div className="mainDiv">
      <div className="calcWrapper">
        <div dir="rtl" className="outputDiv">
          <div className="previous">
            {/* <p>{operator}{previousInput}{operator && currentInput}</p> */}
            <p>{result ? currentInput + operator + previousInput : operator + previousInput}</p>
          </div>
          <div className="current">
            <p>{result ? result : currentInput}</p>
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
              operator === "" ? setPreviousInput((prev) => prev + 1) : setCurrentInput((prev) => prev + 1);
            }}
          >
            1
          </button>

          <button
            className="grid-item"
            onClick={() => {
              operator === "" ? setPreviousInput((prev) => prev + 2) : setCurrentInput((prev) => prev + 2);
            }}
          >
            2
          </button>
          <button
            className="grid-item"
            onClick={() => {
              operator === "" ? setPreviousInput((prev) => prev + 3) : setCurrentInput((prev) => prev + 3);

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
              operator === "" ? setPreviousInput((prev) => prev + 4) : setCurrentInput((prev) => prev + 4);
            }}
          >
            4
          </button>
          <button
            className="grid-item"
            onClick={() => {
              operator === "" ? setPreviousInput((prev) => prev + 5) : setCurrentInput((prev) => prev + 5);

            }}
          >
            5
          </button>
          <button
            className="grid-item"
            onClick={() => {
              operator === "" ? setPreviousInput((prev) => prev + 6) : setCurrentInput((prev) => prev + 6);

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
              operator === "" ? setPreviousInput((prev) => prev + 7) : setCurrentInput((prev) => prev + 7);

            }}
          >
            7
          </button>
          <button
            className="grid-item"
            onClick={() => {
              operator === "" ? setPreviousInput((prev) => prev + 8) : setCurrentInput((prev) => prev + 8);
            }}
          >
            8
          </button>
          <button
            className="grid-item"
            onClick={() => {
              operator === "" ? setPreviousInput((prev) => prev + 9) : setCurrentInput((prev) => prev + 9);

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
              operator === "" ? setPreviousInput((prev) => prev + 0) : setCurrentInput((prev) => prev + 0);

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
