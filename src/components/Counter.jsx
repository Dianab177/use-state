import React, { useState } from 'react';

const Counter = () => {
    const estadoInicial = 0;
    let [contador, setContador] = useState(estadoInicial);
    const handleSumar = () => {
    setContador(contador +1);
    }
    const handleRestar = () => {
    setContador(contador -1);
    }
    const handleReset = () => {
    setContador(estadoInicial);
    }

  return (
    <div>
        <h2>Counter</h2>
        <hr />
        <button onClick={handleSumar()}>Sumar</button>
        <button onClick={handleRestar()}>Restar</button>
        <button onClick={handleReset()}>Resetear</button>
        <h4>{contador}</h4>
    </div>
  )
}

export default Counter;