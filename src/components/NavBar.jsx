import React from 'react'
import CartWidget from './CartWidget'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className='NavBar'>
            <h1>Fake Store</h1>
            <div className='NavBar-right'>
                <ul>
                    <NavLink to="/" className="li">Inicio</NavLink>
                    <NavLink to="/accesorio" className="li">Accesorios</NavLink>
                    <NavLink to="/electrica" className="li">Electricas</NavLink>
                    <NavLink to="/acustica" className="li">Acusticas</NavLink>
                </ul>
                <CartWidget />
            </div>
        </nav>
    )
}

export default NavBar