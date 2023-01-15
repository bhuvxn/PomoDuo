import React, { useState } from "react";
import loginService from "../services/login";
import pomoduosService from "../services/pomoduos";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  if (window.localStorage.getItem("loggedUser") !== null) {
    window.location.href = "/";
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    // perform login logic here
    try {
      const user = loginService.login({
        username,
        password,
      });
      pomoduosService.setToken(user.token);
      window.localStorage.setItem("loggedUser", JSON.stringify(user));
      if (user) {
        navigate("/");
      }
    }
    catch (error) {
      console.log("wrong credentials");
    }

  };

  return (
    
    <div className="login">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={({ target }) => setUsername(target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
