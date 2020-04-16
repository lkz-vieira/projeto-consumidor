import React, { useState } from "react";
import api from "../../services/api";
import { getToken } from "../../services/auth";

import SearchClient from "../../components/SearchClient";
import ListClient from "../../components/ListClient";

import "./styles.css";

function App() {
  const [client, setClient] = useState([]);
  const token = getToken();

  async function handleSearch(data) {
    const response = await api.post(
      "/client",
      { cpf: data.cpf },
      {
        headers: {
          Authorization: token,
        },
      }
    );
    setClient([...client, response.data]);
  }

  return (
    <div id="app">
      <SearchClient onSubmit={handleSearch} />
      <ul>
        {client.map((value) => (
          <ListClient key={value.id} client={value} />
        ))}
      </ul>
    </div>
  );
}
export default App;
