import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/SideBar.css';


const SideBar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li><Link to="/">Página Inicial</Link></li>
        <li><Link to="/aulas">Aulas</Link></li>
        <li><Link to="/configuracoes">Configurações</Link></li>
        <li><Link to="/contatos">Contatos</Link></li>
      </ul>
    </div>
  );
};

export default SideBar;