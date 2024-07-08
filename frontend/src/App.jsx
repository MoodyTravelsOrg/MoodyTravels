import React, { useState } from "react";
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

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [userId, setUserId] = useState(null);
  const [userImage, setUserImage] = useState(null);

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUsername("");
    setUserId(null);
    setUserImage(null);
  };

  return (
    <Router>
      <Navbar 
        isAuthenticated={isAuthenticated}
        userImage={userImage}
        defaultProfileImage={null} // Add the default profile image here
        username={username}
        onLogout={handleLogout}
      />
      <MainRoutes 
        isAuthenticated={isAuthenticated}
        setUserId={setUserId}
        setIsAuthenticated={setIsAuthenticated}
        setUsername={setUsername}
      />
    </Router>
  );
};

const MainRoutes = ({ isAuthenticated, setUserId, setIsAuthenticated, setUsername }) => {
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
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      {showTravelMood && <TravelMood />}
    </>
  );
};

export default App;

