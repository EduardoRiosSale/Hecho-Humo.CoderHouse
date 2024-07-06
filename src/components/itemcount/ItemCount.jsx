import React, { useState } from 'react';

const itemCount = ({ handleAgregar }) => {
  const [contador, setContador] = useState(1);

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
      <p style={{display: "flex", alignContent:"center", alignItems:"center",justifyContent: "center"}}>Unidades: {contador}</p>
      <div style={{display: "flex", justifyContent: "center" }}>
      <button className='contador' onClick={incrementar}> + </button>
      <button  className='contador' onClick={decrementar}> - </button>
      </div>
      <button className="botoncarrito" onClick={handleAgregar}>Agregar al carrito</button>
    </div>
  );
};

export default itemCount;