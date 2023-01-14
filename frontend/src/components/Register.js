import React from 'react'
import { useState } from 'react'
import registerService from '../services/register'
import pomoduosService from '../services/pomoduos'
import { useNavigate } from 'react-router-dom'
const Register = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      const user = registerService.Register({
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
  }
  return (
    <div className="login">
    <h1>Register</h1>
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
      <button type="submit">Register</button>
    </form>
  </div>
  )
}

export default Register