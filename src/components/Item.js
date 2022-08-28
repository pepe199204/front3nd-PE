import React, { useState } from "react"
// El componente Item no tiene componentes hijos.
// ESTADO: Item debe tener un número para almacenar la cantidad de stock, la misma se la defina el padre a la hora de crearlo.
// MÉTODOS: Item debe manejar el click de su boton para restar la cantidad en stock de sí mismo y a su vez poder aumentar el estado de su "abuelo" App.
// PROPS: Item recibe todos los campos que muestra en pantalla: nombre, descripcion, stock y el métodos heredados para su uso.
// Maqueta de Item:
//    h3
//    p
//    h5 > span    (este span debe mostrar la cantidad si es mayor a 0 "agotado" si llega a 0)
//    button       (este boton debe permitir comprar, pero si la cantidad es menor a 0 debe estar deshabilitado y decir "Sin stock")

export default function Item(props) {

  const {nombre,descripcion,stock,contadorItem} = props;
  //console.log(stock);
  let totalStock = 0;
  const [countStock,setStock] = useState(stock);
  const validacionStock = countStock <= 0;
  const handleStock = () => {
    setStock(countStock - 1);
    contadorItem(totalStock + 1);
    
  }
  return (
    <div className='producto'>
      
      {/* maquetar Item aquí */}
      <h3>{nombre}</h3>
      <p>{descripcion}</p>
      <h5>En Stock: {validacionStock ? <span>Agotado</span> : countStock} </h5>
      <button onClick={() => handleStock()} disabled={validacionStock ? true : false} id="shop">{validacionStock ? 'SIN STOCK' : 'COMPRAR'}</button>
    </div>
  )
}
