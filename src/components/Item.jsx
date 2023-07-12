import React from 'react'

const Item = ({ data }) => {
    return (
        <div className='card'>
            <img src={data.img} alt={`imagen del producto ${data.title}`} />
            <div className='card-text'>
                <h3>{data.title}</h3>
                <p>{data.description}</p>
            </div>
            <div className='card-price'>
                <p>{data.price}</p>
            </div>
            <div className='card-buttons'>
                <button>-</button>
                <p>0</p>
                <button>+</button>
            </div>
            <div className='card-cart'>
                <button>Ver detalles</button>
            </div>
        </div>
    )
}

export default Item