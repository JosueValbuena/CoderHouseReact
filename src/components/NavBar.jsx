import React from 'react'
import CartWidget from './CartWidget'

const NavBar = () => {
    return (
        <nav className='NavBar'>
            <h1>Fake Store</h1>
            <div className='NavBar-right'>
                <ul>
                    <li><a href="#">Categoria 1</a></li>
                    <li><a href="#">Categoria 2</a></li>
                    <li><a href="#">Categoria 3</a></li>
                </ul>
                <CartWidget />
            </div>
        </nav>
    )
}

export default NavBar