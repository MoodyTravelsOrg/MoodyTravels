import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

import { FaUserAstronaut } from "react-icons/fa";
// Imported this from react-icons/fa. (This is a free icon pack that includes a lot of icons. You can find it here: https://react-icons.github.io/react-icons/ )
import { GiDialPadlock } from "react-icons/gi";
// Just FYI: Can't add the additonal import as an enumeration within the first import statement since it's a separate section (gi instead of fa)

// adding the setUserId function to the Login component
const Login = ({ setUserId, setIsAuthenticated, setUsername }) => {
  const [username, setUsernameState] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  // The handleLogin function is created to handle the login process. The fetch request is made to the login endpoint with the username and password in the body. If the response is ok, the user data is stored in the state. If the response is not ok, an error message is thrown.
  async function handleLogin(e) {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const settings = {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: {
          "Content-Type": "application/JSON",
        },
        credentials: "include",
      };
      const response = await fetch(
        `${import.meta.env.VITE_API}/login`,
        settings
      );

      if (response.ok) {
        const userData = await response.json();

        setUserId(userData.id);
        setUsername(userData.username);
        setIsAuthenticated(true);
        navigate("/"); // This will redirect the user to the home page after successful login
      } else {
        const { error } = await response.json();
        throw new Error(error.message);
      }
    } catch (error) {
      alert(error.message);
    }
  }

  // The form is created with the input fields for the username and password. The icons are added to the input fields
  return (
    <div className="container">
      <form onSubmit={handleLogin}>
        <h2>Login</h2>
        <div className="input-box">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsernameState(e.target.value)}
          />
          <FaUserAstronaut className="icon" />
          {/* I picked the Austronaut as a symbol for travelling... Maybe we can find something more fitting but I like it so far... */}
        </div>
        <div className="input-box">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <GiDialPadlock className="icon" />
          {/* I picked the Padlock as a symbol for security... Maybe we can find something more fitting but I like it so far... */}
        </div>
        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}
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
