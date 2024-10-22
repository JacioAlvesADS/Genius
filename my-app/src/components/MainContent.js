import React from 'react';
import '../styles/MainContent.css'; // Suba um nível da pasta components;
import Card from '../components/Card';
import { Link } from 'react-router-dom';

function MainContent() {
  return (
    <div className="main-content">
      <div className="header">
        <img src="https://via.placeholder.com/150" alt="Profile" />
        <div className="info">
          <h2>Turma A</h2>
          <p>Turma do colégio tal</p>
          <Link to="/listaAlunos">
          <button>Ver alunos cadastrados</button>
          </Link>
          <Link to="/listaExercicios">
            <button>Ver exercicios cadastrados</button>
          </Link>
          <Link to="/listaProfessores">
          <button>Ver colaboradores cadastrados</button>
          </Link>
        </div>
      </div>
      
      <div className="cards-section">
        <Card 
          img="https://via.placeholder.com/200" 
          title="Matemática Básica" 
          professor="Prof Lucas Rodolfo" />
        <Card 
          img="https://via.placeholder.com/200" 
          title="Geografia" 
          professor="Prof Arthur Felipe" />
        <Card 
          img="https://via.placeholder.com/200" 
          title="História" 
          professor="Prof Pierre Lucena" />
      </div>
    </div>
  );
}

export default MainContent;