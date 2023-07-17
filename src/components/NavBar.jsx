import React from 'react'
import CartWidget from './CartWidget'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className='NavBar'>
            <h1>Fake Storee</h1>
            <div className='NavBar-right'>
                <ul>
                    <NavLink to="/" className="li">Inicio</NavLink>
                    <NavLink to="/categoria/accesorio" className="li">Accesorios</NavLink>
                    <NavLink to="/categoria/electrica" className="li">Electricas</NavLink>
                    <NavLink to="/categoria/acustica" className="li">Acusticas</NavLink>
                </ul>
                <CartWidget />
            </div>
        </nav>
    )
}

export default NavBar