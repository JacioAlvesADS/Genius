import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import CadastroAlunos from './components/CadastroAlunos';
import './styles/Global.css';
import SideBar from './components/SideBar';
import Home from './components/Home';
import CadastroProfessor from './components/CadastroProfessor/CadastroProfessor';


const App = () => {
  return (
    <Router>
      <div className="app-container">
        <SideBar />
        <div className="main-content">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cadastro" element={<CadastroAlunos />} />
            <Route path="/cadastro-professor" element={<CadastroProfessor />} />
            <Route path="/aulas" element={<div>Aulas</div>} />
            <Route path="/configuracoes" element={<div>Configurações</div>} />
            <Route path="/contatos" element={<div>Contatos</div>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;