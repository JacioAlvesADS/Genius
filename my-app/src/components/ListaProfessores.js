import React from "react";
import '../styles/ListaProfessores.css';
import { Link } from "react-router-dom";

function ListaProfessores() {
    return (
        <div className="lista-container">
            <main className="professores-lista">
                <div className="texto-lista">
                    <h2 className="text-lista">Lista de colaboradores</h2>
                    <Link to="/CadastroColaborador">
                    <button className="btn-lista">Cadastrar novo colaborador</button>
                    </Link>               
                </div>
                <div className="professores">   
                    <ul className="professor-lista">
                        <li className="professor">
                            <img src="https://via.placeholder.com/50" alt="ft" />
                            <h3>Arthur</h3>
                            <p>Geografia</p>
                        </li>
                        <li className="aluno">
                            <img src="https://via.placeholder.com/50" alt="ft" />
                            <h3>Jacio</h3>
                            <p>Historia</p>
                        </li>
                        <li className="aluno">
                            <img src="https://via.placeholder.com/50" alt="ft" />
                            <h3>Vyktor</h3>
                            <p>Matematica</p>
                        </li>
                        <li className="aluno">
                            <img src="https://via.placeholder.com/50" alt="ft" />
                            <h3>Joao</h3>
                            <p>Ingles</p>
                        </li>
                        <li className="aluno">
                            <img src="https://via.placeholder.com/50" alt="ft" />
                            <h3>Mateus</h3>
                            <p>Educacao financeira</p>
                        </li>
                        <li className="aluno">
                            <img src="https://via.placeholder.com/50" alt="ft" />
                            <h3>Pierre</h3>
                            <p>Portugues</p>
                        </li>
                        <li className="aluno">
                            <img src="https://via.placeholder.com/50" alt="ft" />
                            <h3>Lucas</h3>
                            <p>FDS</p>
                        </li>
                        <li className="aluno">
                            <img src="https://via.placeholder.com/50" alt="ft" />
                            <h3>vinicius</h3>
                            <p>Literatura</p>
                        </li>
                        <li className="aluno">
                            <img src="https://via.placeholder.com/50" alt="ft" />
                            <h3>Paulo</h3>
                            <p>Espanhol</p>
                        </li>
                        <li className="aluno">
                            <img src="https://via.placeholder.com/50" alt="ft" />
                            <h3>Dereck</h3>
                            <p>Filosofia</p>
                        </li>
                        <li className="aluno">
                            <img src="https://via.placeholder.com/50" alt="ft" />
                            <h3>Wolf</h3>
                            <p>Ed. Fisica</p>
                        </li>
                    </ul>
                </div>
            </main>
        </div>        
    );
};

export default ListaProfessores;