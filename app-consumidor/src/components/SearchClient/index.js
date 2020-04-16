import React, { useState } from "react";
import './styles.css';

function SearchClient({ onSubmit }) {
  const [cpf, setCpf] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    await onSubmit({
      cpf,
    });
    setCpf("");
  }

  return (
    <div className="search-container">
      <section className="form">
        <form onSubmit={handleSubmit}>
          <h1>Seja Bem Vindo!</h1>
          <h4>Digite um CPF para consultar</h4>
          <input
            type="text"
            placeholder="Número do CPF"
            onChange={(e) => setCpf(e.target.value)}
          />
          <button className="button" type="submit">
            Consultar
          </button>
        </form>
      </section>
    </div>
  );
}

export default SearchClient;
