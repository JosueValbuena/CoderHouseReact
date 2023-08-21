import React, { useContext } from 'react'
import { CartProvider } from '../context/CartProvider';

const ItemDetail = ({ data }) => {

  const { setShoppingCart, shoppingCart } = useContext(CartProvider);

  const handleAddSC = () => {
    data.qty = 1;
    const isExist = shoppingCart.find(ele => ele.id === data.id);
    if (isExist) {
      const addProducts = shoppingCart.map(ele => 
        ele.id === data.id ? { ...ele, qty: ele.qty + 1 } : ele
      );
      setShoppingCart([...addProducts]);
    } else {
      setShoppingCart([...shoppingCart, data])
    }};

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
        <button onClick={handleAddSC}>Agregar Al Carrito</button>
      </div>
    </div>
  )
}

export default ItemDetail