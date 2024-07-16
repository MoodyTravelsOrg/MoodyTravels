import React, { useContext } from "react";
import "./Login.css";
import { Context } from "../../context/Context.jsx";
import { FaUserAstronaut } from "react-icons/fa";
// Imported this from react-icons/fa. (This is a free icon pack that includes a lot of icons. You can find it here: https://react-icons.github.io/react-icons/ )
import { GiDialPadlock } from "react-icons/gi";
// Just FYI: Can't add the additonal import as an enumeration within the first import statement since it's a separate section (gi instead of fa)

// adding the setUserId function to the Login component
const Login = () => {

  const { navigate, username, setUsername, password, setPassword, handleLogin, error, setError} = useContext(Context)

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
              onChange={(e) => setUsername(e.target.value)}
            />
            <FaUserAstronaut className="icon" />
            {/* I picked the Austronaut as a symbol for travelling... Maybe we can find something more fitting but I like it so far... */}
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
            {/* I picked the Padlock as a symbol for security... Maybe we can find something more fitting but I like it so far... */}
          </div>
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit">Log In</button>
      </form>
      <div className="registered-link">
        <button onClick={() => {
          setUsername("")
          setPassword("")
          setError("")
          navigate("/register")
        }
        }>
          Not yet registered? Register here!
        </button>
      </div>
    </div>
  );
};

export default Login;
