import React, { useState } from 'react';


const itemCount = () => {
  const [contador, setContador] = useState(1);
  
  const incrementar = () => {
    setContador(contador + 1);
  };

  const decrementar = () => {
    if (contador > 1) {
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
      
    </div>
  );
};

export default itemCount;