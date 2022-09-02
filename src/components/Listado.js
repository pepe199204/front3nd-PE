import React from 'react'
import Item from './Item'

export default function Listado(props) {

  const {contadorListado} = props;
  const jsonData = require('./data.json');
  const jsonDataArr = jsonData.map((item) => {
    return <Item key={item.id} nombre={item.producto.nombre} descripcion={item.producto.descripcion} stock={item.stock} contadorItem={contadorListado}/>;
  });

  return (
    <div className='container'>
      {jsonDataArr}
    </div>
  )
}
