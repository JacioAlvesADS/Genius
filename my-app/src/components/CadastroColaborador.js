import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/CadastroColaborador.css';

const CadastroColaborador = () => {
  const navigate = useNavigate();
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (termsAccepted) {
      navigate('/');
    } else {
      alert("Você deve aceitar os termos de serviço e a política de privacidade.");
    }
  };

  return (
    <div className="signup-container">
      <main className="signup-form">
        <h2>Cadastro de um novo Colaborador!</h2>

        <form className="form" onSubmit={handleSubmit}>
            <>
              <div className="form-row">
                <div className="form-group">
                  <label>Nome:</label>
                  <input type="text" placeholder="exemplo nome" required />
                </div>

                <div className="form-group">
                  <label>Sobrenome:</label>
                  <input type="text" placeholder="exemplo sobrenome" required />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>CPF:</label>
                  <input type="text" placeholder="111.111.111-11" required />
                </div>

                <div className="form-group">
                  <label>Matéria</label>
                  <input type="text" placeholder="Ex: Matemática" required />
                </div>
              </div>
            </>

          <div className="form-row">
            <div className="form-group input-password">
              <label>Senha:</label>
              <input type="password" placeholder="*********" required />
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

export default CadastroColaborador;