import React, { useContext } from 'react'
import { CartProvider } from '../context/CartProvider';

const CartItem = ({ data }) => {

    const { shoppingCart, setShoppingCart } = useContext(CartProvider);

    const handleIncrease = () => {
        const isExist = shoppingCart.find(ele => ele.id === data.id);
        if (isExist) {
            const addProducts = shoppingCart.map(ele =>
                ele.id === data.id ? { ...ele, qty: ele.qty + 1 } : ele
            );
            setShoppingCart([...addProducts]);
        } else {
            setShoppingCart([...shoppingCart, data])
        }
    }

    const handleDecrease = () => {
        if (data.qty > 1) {
            const isExist = shoppingCart.find(ele => ele.id === data.id);
            if (isExist) {
                const addProducts = shoppingCart.map(ele =>
                    ele.id === data.id ? { ...ele, qty: ele.qty - 1 } : ele
                );
                setShoppingCart([...addProducts]);
            } else {
                setShoppingCart([...shoppingCart, data])
            }
        }else{
            const index = shoppingCart.findIndex(ele => ele.id === data.id);
            shoppingCart.splice(index, 1);
            setShoppingCart([...shoppingCart]);
        }
    }

    return (
        <div className='CartItem'>
            <div className='CartItem-left'>
                <img src={data.img} alt={`imagen del producto ${data.title}`} />
                <div className='CartItem-left-card-text'>
                    <h3>{data.titulo}</h3>
                    <p>{data.precio}</p>
                </div>
            </div>
            <div className='CartItem-right'>
                <div className='card-buttons'>
                    <button onClick={handleDecrease}>-</button>
                    <p>{data.qty}</p>
                    <button onClick={handleIncrease}>+</button>
                </div>
            </div>
        </div>
    )
}

export default CartItem