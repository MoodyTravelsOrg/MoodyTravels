import React from 'react';
import { useState, useEffect } from 'react';
import {
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Homepage from "./views/Homepage";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import MoodTracker from "./components/MoodTracker/MoodTracker";
import TravelMood from "./components/TravelMood/TravelMood";
import DestinationDetail from "./components/DestinationView/DestinationView";
import PageNotFound from "./views/PageNotFound";
import UserProfile from './components/UserProfile/UserProfile';


// App component with all the routing logic for make posible the navigation between the different views and keeping the Navbar component always visible at the top of the page 
const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [userId, setUserId] = useState(null);
  const [userImage, setUserImage] = useState(null);
  const navigate = useNavigate();

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
    localStorage.removeItem('username');
    localStorage.removeItem('userId');
    localStorage.removeItem('userImage');
    setUsername('');
    setUserId(null);
    setUserImage(null);
    setIsAuthenticated(false);
    navigate('/');
  };

  return (
    <Routes>
      <Route path="/" element={<Layout isAuthenticated={isAuthenticated} userImage={userImage} username={username} onLogout={handleLogout} />}>
        <Route index element={<Homepage isAuthenticated={isAuthenticated} />} />
        <Route path="/mood-tracker" element={<MoodTracker userId={userId} />} />
        <Route path="/travel-mood" element={<TravelMood />} />
        <Route path="/destination/:name" element={<DestinationDetail />} />
        <Route path="/login" element={<Login setUserId={setUserId} setIsAuthenticated={setIsAuthenticated} setUsername={setUsername} />} />
        <Route path="/register" element={<Register setUserId={setUserId} setIsAuthenticated={setIsAuthenticated} setUsername={setUsername} />} />
        <Route path="/user-profile" element={<UserProfile userId={userId} setUserImage={setUserImage} setUsername={setUsername} />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
