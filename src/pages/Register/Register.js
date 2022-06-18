import styles from "./Register.module.css";

import { useState, useEffect } from "react";

const Register = () => {
  return (
    <div>
      <h1>Cadastre-se para participar do blog!</h1>
      <p>O lugar ideal para você aprender diariamente!</p>
      <form>
        <span>Nome:</span>
        <input
          type="text"
          name="displayName"
          required
          placeholder="Nome do usuário"
        />
        <span>E-mail:</span>
        <input
          type="email"
          name="email"
          required
          placeholder="E-mail do usuário"
        />
        <span>Senha:</span>
        <input
          type="password"
          name="password"
          required
          placeholder="Insira sua senha"
        />
        <span>Confirmação de senha:</span>
        <input
          type="password"
          name="confirmPassword"
          required
          placeholder="Confirme a sua senha"
        />
        <button className="btn">Cadastrar</button>
      </form>
    </div>
  );
};

export default Register;
