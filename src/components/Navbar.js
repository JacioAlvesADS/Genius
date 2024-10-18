import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <img className="navbar-logo" src="" alt="logo"/>
            <div className="navbar-name">Genius</div>
            <ul className="navbar-menu">
                <li><a href="/">Home</a></li>
                <li><a href="/">Aulas</a></li>
                <li><a href="/">Configurações </a></li>
                <li><a href="/">Contatos</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;