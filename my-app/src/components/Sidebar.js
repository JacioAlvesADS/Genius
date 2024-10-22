import React from 'react';
import '../styles/Sidebar.css'
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <aside className="sidebar">
      <ul>
        <li><Link to="/">Página Principal</Link></li>       
        <li>Aulas</li>
        <li>Configurações</li>
        <li>Contatos</li>
      </ul>
    </aside>
  );
}

export default Sidebar;