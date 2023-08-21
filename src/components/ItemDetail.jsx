import React from 'react'

const ItemDetail = ({data}) => {

  return (
    <div className='itemDetail-card'>
        <img src={data.img} alt={`imagen de ${data.title}`} />
        <div>
            <div>
                <h2>{data.titulo}</h2>
                <p>{data.descripcion}</p>
            </div>
            <div>
                <p>Categoria: {data.categoria}</p>
                <p>Precio: {data.precio}</p>
            </div>
            <button>Agregar Al Carrito</button>
        </div>
    </div>
  )
}

export default ItemDetail