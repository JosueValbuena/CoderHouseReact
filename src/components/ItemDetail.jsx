import React from 'react'

const ItemDetail = ({data}) => {

  return (
    <div className='itemDetail-card'>
        <img src={data.img} alt={`imagen de ${data.title}`} />
        <div>
            <div>
                <h2>{data.title}</h2>
                <p>{data.description}</p>
            </div>
            <div>
                <p>Categoria: {data.category}</p>
                <p>Precio: {data.price}</p>
            </div>
            <button>Agregar Al Carrito</button>
        </div>
    </div>
  )
}

export default ItemDetail