import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/CadastroProfessor.css';

const CadastroProfessor = () => {
    const navigate = useNavigate();
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [cpf, setCpf] = useState('');
    const [senha, setSenha] = useState('');
    const [termsAccepted, setTermsAccepted] = useState(false);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Aqui você pode adicionar a lógica para salvar o professor, por exemplo, fazer uma requisição para uma API.
      console.log('Professor cadastrado:', { nome, sobrenome, cpf, senha, termsAccepted });
      navigate('/'); // Redireciona para a página inicial após o cadastro
    };
  
    return (
      <div className="signup-container">
        <main className="signup-form">
          <h2>Cadastro de um novo Professor</h2>
          <form className="form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>Nome:</label>
                <input 
                  type="text" 
                  value={nome} 
                  onChange={(e) => setNome(e.target.value)} 
                  placeholder="exemplo nome" 
                  required 
                />
              </div>
              <div className="form-group">
                <label>Sobrenome:</label>
                <input 
                  type="text" 
                  value={sobrenome} 
                  onChange={(e) => setSobrenome(e.target.value)} 
                  placeholder="exemplo sobrenome" 
                  required 
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>CPF:</label>
                <input 
                  type="text" 
                  value={cpf} 
                  onChange={(e) => setCpf(e.target.value)} 
                  placeholder="111.111.111-11" 
                  required 
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group input-password">
                <label>Senha:</label>
                <input 
                  type="password" 
                  value={senha} 
                  onChange={(e) => setSenha(e.target.value)} 
                  placeholder="*********" 
                  required 
                />
              </div>
            </div>
            <div className="terms-container">
              <input 
                type="checkbox" 
                required 
                onChange={(e) => setTermsAccepted(e.target.checked)} 
              />
              <label>
                Aceito os Termos de Serviço e a Política de Privacidade
              </label>
            </div>
            <button type="submit" className="submit-button">Criar conta</button>
          </form>
        </main>
      </div>
    );
  };
  
export default CadastroProfessor;