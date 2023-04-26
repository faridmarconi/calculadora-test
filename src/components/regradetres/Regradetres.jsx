import React, { useState } from 'react';
import { BsBackspaceFill } from 'react-icons/bs';
import "./regradetres.css"

function RegraDeTres() {
  const [valorA, setValorA] = useState('');
  const [valorB, setValorB] = useState('');
  const [valorC, setValorC] = useState('');
  const [resultado, setResultado] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    const a = Number(valorA);
    const b = Number(valorB);
    const c = Number(valorC);

    const resultadoCalculado = (a * b) / c;
    console.log(resultado)
    setResultado(resultadoCalculado);
        var frase =  "( " + a + " . " + b + " ) / " + c + "X <br>" + (a * b) + " = " + c + "X <br> X= " + (a * b) + "/" + c + "<br>X= " + resultadoCalculado
        var index = 0;
        var intervalId = setInterval(function() {
            if (resultadoCalculado > 0) {
                document.getElementById("frase").innerHTML = frase.substring(0, index);
                index++;
                if (index > frase.length) {
                clearInterval(intervalId);
                }
            }
        }, 20);
  }

  const clear = () => {
    setValorA("");
    setValorB("");
    setValorC("");
    document.getElementById("frase").innerHTML = "";
  };

  return (
    <>
    <div className="container">
        <div>
            <h1 className='title'>Regra de três</h1>
        </div>
        <form onSubmit={handleSubmit}>
        <div>

            <input type="number" placeholder="Valor A" value={valorA} onChange={event => setValorA(event.target.value)} required/>
        </div>
        <div>
            <input type="number" placeholder="Valor B" value={valorB} onChange={event => setValorB(event.target.value)} required/>
        </div>
        <div>
            <input type="number" placeholder="Valor C" value={valorC} onChange={event => setValorC(event.target.value)} required/>
        </div>
        <div>
            <input type="text" placeholder="X" disabled/>

        </div>
        <div className="actions">
        <span className="cleanRt" onClick={clear}><BsBackspaceFill /></span>
        <button className='button-calcular' type="submit">Calcular</button>
        </div>
        </form>
        <p id="frase"></p>
        
    </div>
    </>
  );
}

export default RegraDeTres;
