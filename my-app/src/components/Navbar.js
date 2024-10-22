import React from 'react';
import '../styles/Navbar.css'


function Navbar() {
  return (
    <nav className="navbar">
      <h1>Genius</h1>
      <ul>
        <li>Home</li>
        <li>Aulas</li>
        <li>Configurações</li>
        <li>Contatos</li>
      </ul>
      <input type="text" placeholder="Procure na página" />
    </nav>
  );
}

export default Navbar;