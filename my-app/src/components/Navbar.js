import React from 'react';
import '../styles/Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <h1>Genius</h1>
      <ul>
        <li><a>Home</a></li>
        <li><a>Aulas</a></li>
        <li><a>Configurações</a></li>
        <li><a>Contatos</a></li>
      </ul>
      <input type="text" placeholder="Procure na página" />
    </nav>
  );
}

export default Navbar;