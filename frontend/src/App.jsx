
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation
} from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Homepage from "./views/Homepage";
import Navbar from './components/Navbar/Navbar';
import TravelMood from "./views/TravelMood";
import UserDashboard from "./views/UserDashboard";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [userId, setUserId] = useState(null);
  const [userImage, setUserImage] = useState(null);

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    const storedUserId = localStorage.getItem('userId');
    const storedUserImage = localStorage.getItem('userImage');

    if (storedUsername && storedUserId && storedUserImage) {
      setUsername(storedUsername);
      setUserId(storedUserId);
      setUserImage(storedUserImage);
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUsername("");
    setUserId(null);
    setUserImage(null);
    localStorage.removeItem('username');
    localStorage.removeItem('userId');
    localStorage.removeItem('userImage');
  };

  return (
    <Router>
      <Navbar 
        isAuthenticated={isAuthenticated}
        userImage={userImage}
        defaultProfileImage={null}
        username={username}
        onLogout={handleLogout}
      />
      <MainRoutes 
        isAuthenticated={isAuthenticated}
        userId={userId}
        setUserId={setUserId}
        setIsAuthenticated={setIsAuthenticated}
        setUsername={setUsername}
        setUserImage={setUserImage}
      />
    </Router>
  );
};

const MainRoutes = ({ isAuthenticated, userId, setUserId, setIsAuthenticated, setUsername, setUserImage }) => {
  const location = useLocation();
  const showTravelMood = location.pathname !== "/login" && location.pathname !== "/register";

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login setUserId={setUserId} setIsAuthenticated={setIsAuthenticated} setUsername={setUsername} />} />
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
          element={<Homepage isAuthenticated={isAuthenticated} />}
        />
        {isAuthenticated && (
          <Route
            path="/user-profile"
            element={<UserDashboard userId={userId} setUsername={setUsername} setUserImage={setUserImage} />}
          />
        )}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      {showTravelMood && <TravelMood />}
    </>
  );
};

export default App;

