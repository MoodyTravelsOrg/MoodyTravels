import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import HomePage from "./views/Homepage";
import Navbar from './components/Navbar/Navbar'


const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [userId, setUserId] = useState(null);

  return (
    <Router>
      <Navbar 
       setUserId={setUserId}
       setIsAuthenticated={setIsAuthenticated}
       setUsername={setUsername}/>

       {/* Just added this right now as discussed during our very late Daily Scrum haha */}
       <Login />
       {/* ---------------------------------------------------------------------------- */}

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
