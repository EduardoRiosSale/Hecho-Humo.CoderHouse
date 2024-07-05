import React, { useState } from 'react';

const Contador = () => {
  const [contador, setContador] = useState(0);

  const incrementar = () => {
    setContador(contador + 1);
  };

  const decrementar = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };

  return (
      
    <div>
      <p>Unidades: {contador}</p>
      <div style={{display: "flex", justifyContent: "center" }}>
      <button className='contador' onClick={incrementar}> + </button>
      <button  className='contador' onClick={decrementar}> - </button>
      </div>
      
    </div>
  );
};

export default Contador;