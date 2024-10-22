import React from "react";
import '../styles/ListaExercicio.css';
import { Link } from "react-router-dom";


function ListaProfessor() {
    return (
        <div className="lista-container">
            <main className="exercicios-lista">
                <div className="texto-lista">
                    <h2 className="text-lista">Lista de Exercicios</h2>
                    <Link to="/CadastroExercicios">
                        <button className="btn-lista">Cadastrar novo exercicio</button>
                    </Link>
                </div>
                <div className="exercicios">   
                    <ul className="ex-lista">
                        <li className="exercicio">
                            <img src="https://via.placeholder.com/50" alt="ft" />
                            <h3>Exercicio 1</h3>
                            <h3>Dificil</h3>
                            <h3>00/00/0000</h3>
                        </li>
                        <li className="exercicio">
                            <img src="https://via.placeholder.com/50" alt="ft" />
                            <h3>Exercicio 2</h3>
                            <h3>Intermediario</h3>
                            <h3>00/00/0000</h3>
                        </li>
                        <li className="exercicio">
                            <img src="https://via.placeholder.com/50" alt="ft" />
                            <h3>Exercicio 3</h3>
                            <h3>Facil</h3>
                            <h3>00/00/0000</h3>
                        </li>
                        <li className="exercicio">
                            <img src="https://via.placeholder.com/50" alt="ft" />
                            <h3>Exercicio 4</h3>
                            <h3>Dificil</h3>
                            <h3>00/00/0000</h3>
                        </li>
                        <li className="exercicio">
                            <img src="https://via.placeholder.com/50" alt="ft" />
                            <h3>Exercicio 5</h3>
                            <h3>Dificil</h3>
                            <h3>00/00/0000</h3>
                        </li>
                        <li className="exercicio">
                            <img src="https://via.placeholder.com/50" alt="ft" />
                            <h3>Exercicio 6</h3>
                            <h3>Intermediario</h3>
                            <h3>00/00/0000</h3>
                        </li>
                        <li className="exercicio">
                            <img src="https://via.placeholder.com/50" alt="ft" />
                            <h3>Exercicio 7</h3>
                            <h3>Dificil</h3>
                            <h3>00/00/0000</h3>
                        </li>
                        <li className="exercicio">
                            <img src="https://via.placeholder.com/50" alt="ft" />
                            <h3>Exercicio 8</h3>
                            <h3>Facil</h3>
                            <h3>00/00/0000</h3>
                        </li>
                        <li className="exercicio">
                            <img src="https://via.placeholder.com/50" alt="ft" />
                            <h3>Exercicio 9</h3>
                            <h3>Dificil</h3>
                            <h3>00/00/0000</h3>
                        </li><li className="exercicio">
                            <img src="https://via.placeholder.com/50" alt="ft" />
                            <h3>Exercicio 9</h3>
                            <h3>Intermediario</h3>
                            <h3>00/00/0000</h3>
                        </li>
                        <li className="exercicio">
                            <img src="https://via.placeholder.com/50" alt="ft" />
                            <h3>Exercicio 10</h3>
                            <h3>Dificil</h3>
                            <h3>00/00/0000</h3>
                        </li>
                        <li className="exercicio">
                            <img src="https://via.placeholder.com/50" alt="ft" />
                            <h3>Exercicio 11</h3>
                            <h3>Facil</h3>
                            <h3>00/00/0000</h3>
                        </li>
                        <li className="exercicio">
                            <img src="https://via.placeholder.com/50" alt="ft" />
                            <h3>Exercicio 12</h3>
                            <h3>Dificil</h3>
                            <h3>00/00/0000</h3>
                        </li>
                    </ul>
                </div>
            </main>
        </div>        
    );
};

export default ListaProfessor;