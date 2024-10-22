import React from "react";
import '../styles/ListaAlunos.css';
import { Link } from "react-router-dom";

function ListaAlunos() {
    return (
        <div className="lista-container">
            <main className="alunos-lista">
                <div className="texto-lista">
                    <h2 className="text-lista">Lista de alunos</h2>
                    <Link to="/cadastroAlunos">
                    <button className="btn-lista">Cadastrar novo aluno</button>
                    </Link>               
                </div>
                <div className="alunos">   
                    <ul className="aluno-lista">
                        <li className="aluno">
                            <img src="https://via.placeholder.com/50" alt="Ft aluno" />
                            <h3>Arthur</h3>
                            <p>B</p>
                        </li>
                        <li className="aluno">
                            <img src="https://via.placeholder.com/50" alt="Ft aluno" />
                            <h3>Jacio</h3>
                            <p>A</p>
                        </li>
                        <li className="aluno">
                            <img src="https://via.placeholder.com/50" alt="Ft aluno" />
                            <h3>Vyktor</h3>
                            <p>C</p>
                        </li>
                        <li className="aluno">
                            <img src="https://via.placeholder.com/50" alt="Ft aluno" />
                            <h3>Joao</h3>
                            <p>A</p>
                        </li>
                        <li className="aluno">
                            <img src="https://via.placeholder.com/50" alt="Ft aluno" />
                            <h3>Mateus</h3>
                            <p>B</p>
                        </li>
                        <li className="aluno">
                            <img src="https://via.placeholder.com/50" alt="Ft aluno" />
                            <h3>Pierre</h3>
                            <p>C</p>
                        </li>
                        <li className="aluno">
                            <img src="https://via.placeholder.com/50" alt="Ft aluno" />
                            <h3>Lucas</h3>
                            <p>A</p>
                        </li>
                        <li className="aluno">
                            <img src="https://via.placeholder.com/50" alt="Ft aluno" />
                            <h3>vinicius</h3>
                            <p>C</p>
                        </li>
                        <li className="aluno">
                            <img src="https://via.placeholder.com/50" alt="Ft aluno" />
                            <h3>Paulo</h3>
                            <p>D</p>
                        </li>
                        <li className="aluno">
                            <img src="https://via.placeholder.com/50" alt="Ft aluno" />
                            <h3>Dereck</h3>
                            <p>B</p>
                        </li>
                        <li className="aluno">
                            <img src="https://via.placeholder.com/50" alt="Ft aluno" />
                            <h3>Wolf</h3>
                            <p>D</p>
                        </li>
                    </ul>
                </div>
            </main>
        </div>        
    );
};

export default ListaAlunos;