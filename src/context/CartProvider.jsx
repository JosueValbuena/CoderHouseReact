import React, { createContext, useState } from 'react'

export const CartProvider = createContext();

export const DataProvider = ({ children }) => {

    const [shoppingCart, setShoppingCart] = useState([]);

    const totalQty = shoppingCart.map(ele => ele.qty).reduce((a, b) => a + b, 0);
    const totalPrice = shoppingCart.map(ele => ele.qty * ele.precio).reduce((a, b) => a + b, 0);

    return (
        <CartProvider.Provider value={{
            shoppingCart, setShoppingCart,
            totalQty, totalPrice
        }}>
            {children}
        </CartProvider.Provider>
    )
}