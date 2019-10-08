import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <header>
            <h1>To Do List</h1>
            <nav>
                <NavLink to='/' >Home</NavLink> | <NavLink to='/about' >About</NavLink>
            </nav>
        </header>
    )
}

export default Header;