import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation,
  useNavigate
} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Homepage from "./views/Homepage";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import MoodTracker from "./components/MoodTracker/MoodTracker";
/* import TravelMood from "./components/TravelMood/TravelMood"; */
import PageNotFound from "./views/PageNotFound";


const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); //! rename to isLoggedIn?
  const [username, setUsername] = useState("");
  const [userId, setUserId] = useState(null);
  const [userImage, setUserImage] = useState(null);

  // show travel component everywhere except for register and login
  /* const location = useLocation();
  const showTravelMood = location.pathname !== "/login" && location.pathname !== "/register"; */

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

  //! move to login component
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
      <Routes> 
        {/* parent route */}
        <Route path="/" element={<Layout isAuthenticated={isAuthenticated} userImage={userImage} username={username} onLogout={handleLogout}/>}>
          {/* child routes */}
          <Route index element={<Homepage isAuthenticated={isAuthenticated} />} />
          <Route path="/mood-tracker" element={<MoodTracker userId={userId} />}></Route>
          <Route path="/login" element={<Login setUserId={setUserId} setIsAuthenticated={setIsAuthenticated} setUsername={setUsername} />} />
          <Route path="/register" element={<Register setUserId={setUserId} setIsAuthenticated={setIsAuthenticated} setUsername={setUsername} />} />
          <Route path="*" element={<PageNotFound />} /> 
        </Route>      
      </Routes>
      {/* show travel component conditionally: */}
      {/* {showTravelMood && <TravelMood />} */}
    </Router>
  );
};

export default App;

