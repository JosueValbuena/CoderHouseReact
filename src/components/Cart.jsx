import React, { useContext } from 'react'
import { CartProvider } from '../context/CartProvider'
import CartItem from './CartItem';

const Cart = () => {

    const { shoppingCart, setShoppingCart, totalQty, totalPrice } = useContext(CartProvider);

    const handleEmptyCart = () => {
        setShoppingCart([]);
    }

    return (
        <div className='container-CartItem'>
            <div>
                {!shoppingCart ? "Tu carrito esta vacio :(" : shoppingCart.map(ele => <CartItem data={ele} />)}
                </div>
            <div>
                <div>
                    <h3>Resumen de compra</h3>
                    <p>Total de productos: {totalQty}</p>
                    <p>Total a Pagar: ${totalPrice.toLocaleString("es")}</p>
                    <button>Realizar Pedido</button>
                    <button onClick={handleEmptyCart}>Vaciar Carrito</button>
                </div>
                <div>
                    <h1>Formulario</h1>
                </div>
            </div>
        </div>
    )
}

export default Cart