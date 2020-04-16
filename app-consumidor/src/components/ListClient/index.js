import React from "react";

import "./styles.css";

function ListClient({ client }) {
  return (
    <li className="list-container">
      <strong>Nome:</strong>
      <p>{client.name}</p>

      <strong>Idade:</strong>
      <p>{client.age}</p>

      <strong>CPF:</strong>
      <p>{client.cpf}</p>

      <strong>Endereço:</strong>
      <p>{client.address}</p>

      <strong>Fonte de Renda:</strong>
      <p>{client.fonte_renda.toUpperCase()}</p>

      <strong>Ultima Compra:</strong>
      {client.last_buy.map((s, i) => (
        <p key={i}>
          <li>Loja: {s.shop}</li>
          <li>Produto: {s.product}</li>
          <li>Valor: R${s.value}</li>
          <li>Data: {s.date.split("T")[0]}</li>
        </p>
      ))}

      <strong>Bens:</strong>
      {client.assets.map((s, i) => (
        <p key={i}>
          <li>Nome: {s.name}</li>
          <li>Valor: R${s.value}</li>
          <p>&nbsp;</p>
        </p>
      ))}
    </li>
  );
}

export default ListClient;
