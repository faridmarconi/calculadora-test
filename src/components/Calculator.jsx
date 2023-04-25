import React, { useState } from "react";
import "./style.css";

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

  const operatorHandler = () => {
        if (result > 0) {
            setResult(result * -1);
        } else {
            setResult(Math.abs(result));
        }
    }

  return (
    <>
      <div className="container">
        <div className="result">
          <input type="text" value={result} />
        </div>
        
          <button onClick={clear}>C</button>
          <button onClick={operatorHandler}>+/-</button>
          <button name="%" onClick={handleClick}>%</button>
          <button name="/" onClick={handleClick}>/</button>
          <button name="7" onClick={handleClick}>7</button>
          <button name="8" onClick={handleClick}>8</button>
          <button name="9" onClick={handleClick}>9</button>
          <button name="*" onClick={handleClick}>X</button>
          <button name="4" onClick={handleClick}>4</button>
          <button name="5" onClick={handleClick}>5</button>
          <button name="6" onClick={handleClick}>6</button>
          <button name="-" onClick={handleClick}>-</button>
          <button name="1" onClick={handleClick}>1</button>
          <button name="2" onClick={handleClick}>2</button>
          <button name="3" onClick={handleClick}>3</button>
          <button name="+" onClick={handleClick}>+</button>
          <button name="0" onClick={handleClick}>0</button>
          <button name="." onClick={handleClick}>,</button>
          <button onClick={calculate}>=</button>
        
      </div>
    </>
  );
}