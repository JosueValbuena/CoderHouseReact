import React, { useContext } from 'react'
import { CartProvider } from '../context/CartProvider';

const CartWidget = () => {

    const {totalQty} = useContext(CartProvider);

    return (
        <div className='NavBar-CartWidget'>
            <i className="fa-solid fa-cart-shopping"></i>
            <div className='NavBar-CartWidget-count'>{totalQty}</div>
        </div>
    )
}

export default CartWidget