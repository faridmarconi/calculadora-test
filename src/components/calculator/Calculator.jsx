import React, { useState } from "react";
import { BsBackspaceFill } from 'react-icons/bs';
import "./calculator.css";

export default function Calculator() {
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    if (useState > 0) {
        console.log(typeof result)
    } else {
        setResult(result.concat(e.target.name));
    }
  };

  const calculate = () => {
    try {
      // eslint-disable-next-line no-eval
      setResult(eval(result).toString());
    } catch (err) {
      setResult("Error");
    }
  };

  const clear = () => {
    setResult("");
  };


  return (
    <>
      <div className="calculator">
        <div className="result">
          <span className="clean" onClick={clear}><BsBackspaceFill /></span>
          <input type="text" value={result} disabled/>
          
        </div>
      <div className="teclado">
        
          <div><button name="9" onClick={handleClick}>9</button></div>
          <div><button name="8" onClick={handleClick}>8</button></div>
          <div><button name="7" onClick={handleClick}>7</button></div>
          <div><button name="+" onClick={handleClick}>+</button></div>
          <div><button name="6" onClick={handleClick}>6</button></div>
          <div><button name="5" onClick={handleClick}>5</button></div>
          <div><button name="4" onClick={handleClick}>4</button></div>
          <div><button name="-" onClick={handleClick}>-</button></div>
          <div><button name="3" onClick={handleClick}>3</button></div>
          <div><button name="2" onClick={handleClick}>2</button></div>
          <div><button name="1" onClick={handleClick}>1</button></div>
          <div><button name="/" onClick={handleClick}>/</button></div>
          <div><button name="0" onClick={handleClick}>0</button></div>
          <div><button name="." onClick={handleClick}>,</button></div>
          <div><button className="result-button" onClick={calculate}>=</button></div>
          <div><button name="*" onClick={handleClick}>*</button></div>
          </div>
        
      </div>
    </>
  );
}