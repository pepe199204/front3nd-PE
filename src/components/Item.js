import React, { useState } from "react"

export default function Item(props) {

  const {nombre,descripcion,stock,contadorItem} = props;
  let totalStock = 0;
  const [countStock,setStock] = useState(stock);
  const validacionStock = countStock <= 0;
  const handleStock = () => {
    setStock(countStock - 1);
    contadorItem(totalStock + 1);
    
  }
  return (
    <div className='producto'>
      <h3>{nombre}</h3>
      <p>{descripcion}</p>
      <h5>En Stock: {validacionStock ? <span>Agotado</span> : countStock} </h5>
      <button onClick={() => handleStock()} disabled={validacionStock ? true : false} id="shop">{validacionStock ? 'SIN STOCK' : 'COMPRAR'}</button>
    </div>
  )
}
