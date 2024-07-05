import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Homepage from "./views/Homepage";
import Navbar from './components/Navbar/Navbar';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [userId, setUserId] = useState(null);
  const [userAvatar, setUserAvatar] = useState("");

  

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUsername("");
    setUserId(null);
    setUserAvatar(null);
  };

  return (
    <Router>
      <Navbar 
        isAuthenticated={isAuthenticated}
        userImage={setUserAvatar}
        username={username}
        onLogout={handleLogout}
      />
      <Routes>
        <Route path="/login" element={<Login setUserId={setUserId} setIsAuthenticated={setIsAuthenticated} setUsername={setUsername} setUserAvatar={setUserAvatar} />} />
        <Route
          path="/register"
          element={
            <Register
              setUserId={setUserId}
              setIsAuthenticated={setIsAuthenticated}
              setUsername={setUsername}
              setUserAvatar={setUserAvatar} 
            />
          }
        />
        <Route
          path="/"
          element={<Homepage isAuthenticated={isAuthenticated} />}
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;

