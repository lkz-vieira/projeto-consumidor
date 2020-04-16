import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import api from "../../services/api";
import { login } from "../../services/auth";
import "./styles.css";
import logoImg from "../assets/client.svg";
class SignIn extends Component {
  state = {
    email: "",
    password: "",
    error: "",
  };

  handleSignIn = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    if (!email || !password) {
      this.setState({ error: "Preencha e-mail e senha para continuar!" });
    } else {
      try {
        const response = await api.post("/login", { email, password });
        login(response.data.token);
        this.props.history.push("/dashboard");
      } catch (err) {
        this.setState({
          error: "Houve um problema com o login, verifique suas credenciais.",
        });
      }
    }
  };

  render() {
    return (
      <div className="logon-container">
        <section className="form">
          <form onSubmit={this.handleSignIn}>
            {this.state.error && <p>{this.state.error}</p>}
            <h1> Faça seu Login</h1>
            <input
              type="email"
              placeholder="Endereço de e-mail"
              onChange={(e) => this.setState({ email: e.target.value })}
            />
            <input
              type="password"
              placeholder="Senha"
              onChange={(e) => this.setState({ password: e.target.value })}
            />
            <button className="button" type="submit">
              Entrar
            </button>
          </form>
        </section>
        <img src={logoImg} alt="Cliente Consumidor" />  
      </div>
    );
  }
}

export default withRouter(SignIn);
