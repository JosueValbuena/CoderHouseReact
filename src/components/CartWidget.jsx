import React from 'react'

const CartWidget = () => {
    return (
        <div className='NavBar-CartWidget'>
            <i className="fa-solid fa-cart-shopping"></i>
            <div className='NavBar-CartWidget-count'>0</div>
        </div>
    )
}

export default CartWidget