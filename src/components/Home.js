import React from 'react';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Bem-vindo ao Genius</h1>
      <p>Esta é a página inicial do seu site. Aqui você pode navegar para diferentes seções usando a barra lateral.</p>
      <div className="quick-links">
        <h2>Links Rápidos</h2>
        <ul>
          <li><a href="/aulas">Aulas</a></li>
          <li><a href="/cadastro">Cadastrar Alunos</a></li>
          <li><a href="/cadastro-professor">Cadastrar Professor</a></li>
          <li><a href="/configuracoes">Configurações</a></li>
          <li><a href="/contatos">Contatos</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Home;

/*<!DOCTYPE html>
<html>
<head>
  <title>Genius</title>
  <link rel="stylesheet" href="styles.css"> </head>
<body>
  <nav>
    <ul>
      <li><a href="#">Página Principal</a></li>
      <li><a href="#">Aulas</a></li>
      <li><a href="#">Configurações</a></li>
      <li><a href="#">Contatos</a></li>
    </ul>
  </nav>

  <main>
    <h1>Turma A</h1>
    <p>Turma do colégio tal</p>
    <img src="turma_a.jpg" alt="Imagem da turma A">

    <div class="buttons">
      <button>Ver alunos cadastrados</button>
      <button>Cadastrar novo Exercício</button>
    </div>

    <div class="cards">
      <div class="card">
        <img src="matematica.jpg" alt="Matemática">
        <h3>Prof Lucas Rodolfo</h3>
        <p>Matemática Básica</p>
      </div>
      </div>
  </main>

  <script src="script.js"></script> </body>
</html> */