import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import './App.css';
import ListaExercicio from './components/ListaExercicio';
import ListaAlunos from './components/ListaAlunos';
import CadastroAlunos from './components/CadastroAlunos';
import ListaProfessores from './components/ListaProfessores';
import CadastroColaborador from './components/CadastroColaborador';
import CadastroExercicios from './components/CadastroExercicios';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<MainContent />} />
          <Route path="/listaAlunos" element={<ListaAlunos />} />
          <Route path="/listaExercicios" element={<ListaExercicio />} />
          <Route path="/listaProfessores" element={<ListaProfessores />} />
        </Routes>
        <Routes>
          <Route path="/cadastroAlunos" element={<CadastroAlunos />} />
          <Route path="/cadastroColaborador" element={<CadastroColaborador />} />
          <Route path="/cadastroExercicios" element={<CadastroExercicios />} />          
        </Routes>
      </div>
    </Router>
  );
}

export default App;