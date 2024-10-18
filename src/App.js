import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import CadastroAlunos from './components/CadastroAlunos';
import './styles/Global.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/cadastro" element={<CadastroAlunos />} />
      </Routes>
    </Router>
  );
};

export default App;