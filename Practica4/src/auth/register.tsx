"use client";

import { RegisterUser } from "@/lib/api";
import { ErrorResponse, RegisterData } from "@/types/types";
import { useState, useEffect } from "react";
import "./styles.css";

const Register = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [finalUser, setFinalUser] = useState<string>("");
  const [finalEmail, setFinalEmail] = useState<string>("");
  const [finalPassword, setFinalPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handlerRegister = (e: any) => {

    e.preventDefault();
    const response = RegisterUser(username, email, password)
      .then((e) => {
        localStorage.setItem("tokenRegister", e);
        document.cookie = ``;
      })
      .catch((e) => {
        setError(`Ha habido un error ${e}`);
      });

  };

  return (
    <div>
      {error && <h1>{error}</h1>}

      {!error && (
        <div className="cardLogin">
          <form onSubmit={handlerRegister}>
            <input  type={"text"}onChange={(e) => {setUsername(e.target.value);}}value={username}
            placeholder={"Introduce to usuario"}/>
            <input type={"text"} onChange={(e) => {setEmail(e.target.value);}}value={email}
              placeholder="Introduce tu email"/>
            <input type={"password"}onChange={(e) => {setPassword(e.target.value);}}
            value={password}placeholder={"Introduce una contraseña"}/>
            <button onClick={(e) => {(setFinalUser(username),setFinalEmail(email),setFinalPassword(password));}}
            type={"submit"}>Crear cuenta</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Register;
