import React, { useState } from "react";
import axios from "axios";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import withRouter from "../components/withRouter";
import { useNavigate } from "react-router-dom";
import jwt_decode from 'jwt-decode'

export interface LoginSite {}

interface User {
  email: string;
  password: string;
}

function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [Errormessage, setErrormessage] = useState<string>("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const user: User = { email, password };
      // const response = await axios.post("http://localhost:3000/login", user);
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(user)
      })
      const responseBody = await response.json()
      const userdata : any = jwt_decode(responseBody.token)
      localStorage.setItem('userid', userdata['id'])

      navigate("/HomehomePage");
    } catch (error) {
      console.error(error);
      setErrormessage("Invalid email or password");
    }
  };

  return (
    <div id="input" className="container">
      <h3 className="ont-weight-bold text-center text-uppercase text-white my-4">
        Bejelentkezés
      </h3>
      <div className="form__group">
        <input
          type="text"
          className="form__input"
          placeholder="Email"
          id="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="form__label"> Email</label>
      </div>
      <div className="form__group">
        <input
          type="password"
          className="form__input"
          id="name"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label className="form__label"> Password</label>
      </div>
      <div className="div-button">
        <button className="button1" onClick={handleLogin}>
          Bejelentkezés
        </button>
        <p className="ErrorMessage"> {Errormessage}</p>
      </div>
    </div>
  );
}

export default Login;
