import React from 'react';
import '../styles/Sidebar.css'

function Sidebar() {
  return (
    <aside className="sidebar">
      <ul>
        <li>Página Principal</li>
        <li>Aulas</li>
        <li>Configurações</li>
        <li>Contatos</li>
      </ul>
    </aside>
  );
}

export default Sidebar;