import React from 'react';
import { useContext, useEffect } from 'react';
import {Route, Routes,} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Homepage from "./views/Homepage";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import MoodTracker from "./components/MoodTracker/MoodTracker";
import TravelMood from "./components/TravelMood/TravelMood";
import DestinationDetail from "./components/DestinationView/DestinationView";
import PageNotFound from "./views/PageNotFound";
import UserProfile from './components/UserProfile/UserProfile';
import { Context } from './context/Context.jsx';

// App component with all the routing logic for make posible the navigation between the different views and keeping the Navbar component always visible at the top of the page 
const App = () => {

  const {  setUsername, setUserId, setUserImage, setIsAuthenticated, userId } = useContext(Context)

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


  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage  />} />
        <Route path="/mood-tracker" element={<MoodTracker />} />
        <Route path="/travel-mood" element={<TravelMood />} />
        <Route path="/destination/:name" element={<DestinationDetail />} />
        <Route path="/login" element={<Login  />} />
        <Route path="/register" element={<Register  />} />
        <Route path="/user-profile" element={<UserProfile userId={userId} setUserImage={setUserImage} setUsername={setUsername} />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
