
import React from 'react'
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "./components/Login";
import Navbar from './components/Navbar/Navbar'
import Register from "./components/Register";
import HomePage from "./views/Homepage";

import "./App.css";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [userId, setUserId] = useState(null);

  return (
    <Router>
      <NavBar
        isAuthenticated={isAuthenticated}
        username={username}
        onLogout={handleLogout}
        userImage={userImage}
      />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/register"
          element={
            <Register
              setUserId={setUserId}
              setIsAuthenticated={setIsAuthenticated}
              setUsername={setUsername}
            />
          }
        />
        <Route
          path="/"
          element={<HomePage isAuthenticated={isAuthenticated} />}
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
