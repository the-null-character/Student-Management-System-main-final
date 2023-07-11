import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './Login.css';
function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add your login logic here
    if (username === 'admin' && password === 'password') {
      alert('Login successful!');
      navigate("/get");
    } else {
      alert('Invalid username or password');
    }

    // Clear input fields after submission
    setUsername('');
    setPassword('');
  };

  return (
    <div>
      <header>
    MANAV - School Management System
    </header>
    
    <div className="login-container">
      <div className="login-image-container">
        <img src={require("./school.png") }/>
      </div>
      <div className="login-form-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
    </div>
  );
}

export default Login;
