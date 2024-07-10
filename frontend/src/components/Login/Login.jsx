import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { FaUserAstronaut } from "react-icons/fa";
import { GiDialPadlock } from "react-icons/gi";

const Login = ({ setUserId, setIsAuthenticated, setUsername }) => {
  const [username, setUsernameState] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();
    setError("");

    try {
      const settings = {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: {
          "Content-Type": "application/JSON",
        },
        credentials: "include",
      };
      const response = await fetch(`${import.meta.env.VITE_API}/login`, settings);

      if (response.ok) {
        const userData = await response.json();
        localStorage.setItem('username', userData.username);
        localStorage.setItem('userId', userData.id);
        localStorage.setItem('userImage', userData.profileImage);

        setUserId(userData.id);
        setUsername(userData.username);
        setIsAuthenticated(true);

        navigate("/"); // Redirect to home page after successful login
      } else {
        const { message } = await response.json();
        setError(message || "Login failed");
      }
    } catch (error) {
      setError("An error occurred. Please try again later.");
    }
  }

  return (
    <div className="container">
      <form onSubmit={handleLogin}>
        <h2>Login</h2>
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <div className="input-box">
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsernameState(e.target.value)}
            />
            <FaUserAstronaut className="icon" />
          </div>
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <div className="input-box">
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <GiDialPadlock className="icon" />
          </div>
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit">Log In</button>
      </form>
      <div className="registered-link">
        <button onClick={() => navigate("/register")}>
          Not yet registered? Register here!
        </button>
      </div>
    </div>
  );
};

export default Login;

